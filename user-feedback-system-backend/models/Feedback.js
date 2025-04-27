// models/Feedback.js

import mongoose from 'mongoose';

// Feedback Schema
const feedbackSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'User name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    feedbackText: {
      type: String,
      required: [true, 'Feedback text is required'],
      trim: true,
    },
    category: {
      type: String,
      enum: ['Suggestion', 'Bug Report', 'Feature Request', 'Other'], // optional field
      default: 'Other',
    },
  },
  {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
  }
);

// Model
const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
