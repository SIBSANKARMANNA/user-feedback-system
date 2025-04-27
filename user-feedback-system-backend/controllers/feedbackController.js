// controllers/feedbackController.js

import Feedback from '../models/Feedback.js';

// @desc    Submit new feedback
// @route   POST /feedback
// @access  Public
export const submitFeedback = async (req, res) => {
  try {
    const { userName, email, feedbackText, category } = req.body;

    // Basic validation
    if (!userName || !email || !feedbackText) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Create new feedback entry
    const newFeedback = new Feedback({
      userName,
      email,
      feedbackText,
      category, // optional
    });

    const savedFeedback = await newFeedback.save();

    res.status(201).json({
      message: 'Feedback submitted successfully!',
      data: savedFeedback,
    });
  } catch (error) {
    console.error('Error in submitFeedback:', error.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// @desc    Get all feedbacks (with optional filters and sorting later)
// @route   GET /feedback
// @access  Public
export const getFeedbacks = async (req, res) => {
  try {
    // For now, just fetch all feedbacks
    const feedbackList = await Feedback.find().sort({ createdAt: -1 }); // Newest first

    res.status(200).json({
      message: 'Feedback fetched successfully!',
      data: feedbackList,
    });
  } catch (error) {
    console.error('Error in getFeedbacks:', error.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
