// FeedbackForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../features/feedback/feedbackSlice';
import { submitFeedback } from '../features/feedback/feedbackAPI'; // Import the API function
import './FeedbackForm.css';

function FeedbackForm() {
  const dispatch = useDispatch();

  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [category, setCategory] = useState('');  // State for optional category
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !feedbackText) {
      setError('All fields are required!');
      return;
    }

    setError('');

    const feedbackData = {
      userName,
      email,
      feedbackText,
      category,  // Include category if provided
      timestamp: new Date().toISOString(),

    };

    try {
      await submitFeedback(feedbackData); // Submit feedback via API
      dispatch(addFeedback(feedbackData));

      setName('');
      setEmail('');
      setFeedbackText('');
      setCategory('');
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setError('There was an error submitting your feedback: ' + err.message);
    }
  };

  return (
    <div className="page">
      <h1>Submit Your Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="feedbackText">Feedback:</label>
          <textarea
            id="feedbackText"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="category">Category (optional):</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Bug Report">Bug Report</option>
            <option value="General Feedback">General Feedback</option>
          </select>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
