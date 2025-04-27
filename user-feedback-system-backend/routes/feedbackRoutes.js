// routes/feedbackRoutes.js

import express from 'express';
import { submitFeedback, getFeedbacks } from '../controllers/feedbackController.js';

const router = express.Router();

// @route   POST /feedback
// @desc    Submit user feedback
router.post('/', submitFeedback);

// @route   GET /feedback
// @desc    Get all feedbacks
router.get('/', getFeedbacks);

export default router;
