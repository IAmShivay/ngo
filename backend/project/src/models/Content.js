import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  user: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'User',
    // required: true

    type: String,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  videoUrl: String,
  images: [
    {
      url: String,
      publicId: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Content", contentSchema);
