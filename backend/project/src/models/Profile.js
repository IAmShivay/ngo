import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    trim: true
  },
  avatarUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Profile', profileSchema);