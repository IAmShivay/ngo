import mongoose from "mongoose";

// Video schema definition
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  videoUrl: {
    type: String,
    required: true, // Assuming the URL is required for the video
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Video model
export default mongoose.model("Video", videoSchema);
