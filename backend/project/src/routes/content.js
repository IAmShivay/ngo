import { Router } from "express";
import { body } from "express-validator";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { authenticate } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";
import Content from "../models/Content.js";
import Video from "../models/video.js";
import Header from "../models/header.js";

// Create separate routers
const router = Router();
const headerRouter = Router(); // Separate router for header routes

// Configure multer for temporary storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 10, // Maximum 10 files
  },
});

const contentValidation = [
  body("title").trim().isLength({ min: 3 }).escape(),
  body("description").trim().optional().escape(),
  body("videoUrl").optional().isURL(),
  validate,
];

// Get all content
router.get("/", async (req, res) => {
  try {
    const content = await Content.find()
      .sort("-createdAt")
      .populate("user", "email");
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create content
router.post("/",  contentValidation, async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;
    const content = new Content({
      title,
      description,
      videoUrl,
      user: req.user._id,
    });
    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/bulk-upload", upload.array("images", 10), async (req, res) => {
  try {
    if (!req.files?.length) {
      return res.status(400).json({ error: "No images uploaded" });
    }

    const uploadPromises = req.files.map((file) => {
      return new Promise((resolve, reject) => {
        // Add file size and type validation
        if (file.size > 10 * 1024 * 1024) {
          // 10MB limit
          reject(new Error("File too large"));
          return;
        }

        if (!file.mimetype.startsWith("image/")) {
          reject(new Error("Invalid file type"));
          return;
        }

        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "content-uploads",
            resource_type: "auto",
            timeout: 60000, // 60 seconds timeout
            eager: [{ width: 800, height: 600, crop: "fill" }], // Optional: Add transformations
          },
          (error, result) => {
            if (error) reject(error);
            else
              resolve({
                url: result.secure_url,
                publicId: result.public_id,
                width: result.width,
                height: result.height,
              });
          }
        );

        uploadStream.end(file.buffer);
      });
    });

    const imageUrls = await Promise.allSettled(uploadPromises);
    const successfulUploads = imageUrls
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);

    if (!successfulUploads.length) {
      return res.status(500).json({ error: "All uploads failed" });
    }

    const content = new Content({
      user: "ENJqLiuExNMoGXMvvzKmuLghsJCjYFscWUCvpkifyMnLFhcGfMdKyWvjaNdHBBoPjdzhZuNYiYiwNbh",
      title: req.body.title || `Upload ${new Date().toISOString()}`,
      images: successfulUploads,
    });

    await content.save();
    res.status(201).json({
      message: `Successfully uploaded ${successfulUploads.length} images`,
      content,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Add images to existing content
router.post(
  "/:id/images",
  
  upload.array("images", 10),
  async (req, res) => {
    try {
      const content = await Content.findOne({
        _id: req.params.id,
        user: req.user._id,
      });

      if (!content) {
        return res
          .status(404)
          .json({ error: "Content not found or unauthorized" });
      }

      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No images uploaded" });
      }

      // Upload new images to Cloudinary
      const uploadPromises = req.files.map((file) => {
        return new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              folder: "content-uploads",
              resource_type: "auto",
            },
            (error, result) => {
              if (error) reject(error);
              else
                resolve({
                  url: result.secure_url,
                  publicId: result.public_id,
                });
            }
          );

          uploadStream.end(file.buffer);
        });
      });

      const newImages = await Promise.all(uploadPromises);
      content.images = [...(content.images || []), ...newImages];
      await content.save();

      res.json({
        message: "Images added successfully",
        content: content,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Update content
router.put("/:id",  contentValidation, async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;
    const content = await Content.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { title, description, videoUrl },
      { new: true }
    );

    if (!content) {
      return res
        .status(404)
        .json({ error: "Content not found or unauthorized" });
    }
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all images
router.get("/images", async (req, res) => {
  try {
    // Set headers for caching and security
    res.set({
      'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      'Vary': 'Origin', // Vary response based on Origin header
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff'
    });
    
    // Fetch all content entries with images populated
    const contentWithImages = await Content.find({
      "images.0": { $exists: true }
    })
    .select("images")
    .lean()
    .limit(100); // Limit the number of results for performance

    if (!contentWithImages || !contentWithImages.length) {
      return res.status(404).json({ 
        success: false,
        error: "No images found",
        message: "No images are currently available"
      });
    }

    // Extract images from content and return
    const allImages = contentWithImages.flatMap((content) => content.images);
    
    res.json({ 
      success: true,
      count: allImages.length,
      images: allImages 
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ 
      success: false,
      error: "Internal server error",
      message: "Failed to fetch images. Please try again later."
    });
  }
});

router.post(
  "/addvideos",
  [
    (body("title").trim().isLength({ min: 3 }).escape(),
    body("link").isURL().withMessage("Must be a valid URL"),
    validate),
  ],
  async (req, res) => {
    try {
      const { title, link } = req.body;

      // Create a new video entry
      const video = new Video({
        title,
        videoUrl: link,
      });

      await video.save();
      res.status(201).json(video);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find().sort("-createdAt");
    if (!videos.length) {
      return res.status(404).json({ error: "No videos found" });
    }
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete content
router.delete("/:id",  async (req, res) => {
  try {
    const content = await Content.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!content) {
      return res
        .status(404)
        .json({ error: "Content not found or unauthorized" });
    }

    // Delete images from Cloudinary
    if (content.images && content.images.length > 0) {
      const deletePromises = content.images.map((image) =>
        cloudinary.uploader.destroy(image.publicId)
      );
      await Promise.all(deletePromises);
    }

    await content.deleteOne();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Header routes (without authentication)
headerRouter.get("/", async (req, res) => {
  try {
    const header = await Header.findOne().sort("-createdAt");
    res.json(header || {});
  } catch (error) {
    console.error("Error fetching header:", error);
    res.status(500).json({ error: "Failed to fetch header content" });
  }
});

headerRouter.put("/", upload.single("content"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    // Convert buffer to base64
    const fileBase64 = req.file.buffer.toString("base64");
    const fileType = req.file.mimetype.startsWith("image/") ? "image" : "video";
    
    // Upload to Cloudinary
    const uploadStr = `data:${req.file.mimetype};base64,${fileBase64}`;
    const uploadOptions = {
      resource_type: fileType,
      folder: "header",
    };

    // Delete existing header content from Cloudinary if exists
    const existingHeader = await Header.findOne();
    if (existingHeader) {
      await cloudinary.uploader.destroy(existingHeader.publicId);
      await Header.deleteOne({ _id: existingHeader._id });
    }

    // Upload new content
    const result = await cloudinary.uploader.upload(uploadStr, uploadOptions);

    // Create new header document
    const header = new Header({
      contentType: fileType,
      url: result.secure_url,
      publicId: result.public_id,
    });

    await header.save();
    res.json(header);
  } catch (error) {
    console.error("Error updating header:", error);
    res.status(500).json({ error: "Failed to update header content" });
  }
});

// Export both routers
export { router, headerRouter };
