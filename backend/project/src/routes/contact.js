import { Router } from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';
import { authenticate, checkRole } from '../middleware/auth.js';
import Contact from '../models/Contact.js';

const router = Router();

const contactValidation = [
  body('name').trim().isLength({ min: 2 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('message').trim().isLength({ min: 10 }).escape(),
  validate
];

// Submit contact message
router.post('/', contactValidation, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all messages (admin only)
router.get('/', authenticate, checkRole(['admin']), async (req, res) => {
  try {
    const messages = await Contact.find().sort('-createdAt');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mark message as resolved (admin only)
router.patch('/:id/resolve', authenticate, checkRole(['admin']), async (req, res) => {
  try {
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { resolved: true },
      { new: true }
    );
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router };