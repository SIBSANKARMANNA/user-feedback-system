// feedbackAPI.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/feedback'; // Replace with your backend API URL

// Fetch feedback from the backend
export const fetchFeedback = async () => {
  try {
    const response = await axios.get(BASE_URL);
    if (Array.isArray(response.data.data)) {
      return response.data.data;
    } else {
      throw new Error('Invalid data format');
    }
  } catch (err) {
    throw new Error('Error fetching feedback: ' + err.message);
  }
};

// Post feedback to the backend
export const submitFeedback = async (feedbackData) => {
  try {
    await axios.post(BASE_URL, feedbackData);
  } catch (err) {
    throw new Error('Error submitting feedback: ' + err.message);
  }
};
