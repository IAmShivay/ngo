import { Router } from 'express';
import { body } from 'express-validator';
import multer from 'multer';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import Profile from '../models/Profile.js';

const router = Router();
const upload = multer({ dest: 'uploads/' });

const profileValidation = [
  body('name').trim().isLength({ min: 2 }).escape(),
  body('bio').trim().optional().escape(),
  validate
];

// Get profile
router.get('/', authenticate, async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      profile = new Profile({ user: req.user._id });
      await profile.save();
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update profile
router.put('/', authenticate, profileValidation, async (req, res) => {
  try {
    const { name, bio } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { name, bio },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update profile picture
router.post('/avatar', authenticate, upload.single('avatar'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const avatarUrl = `/uploads/${req.file.filename}`;
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { avatarUrl },
      { new: true, upsert: true }
    );
    
    res.json({ url: avatarUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router };