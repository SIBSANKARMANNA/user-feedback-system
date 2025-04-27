// Dashboard.js
import React, { useState, useEffect } from 'react';
import { fetchFeedback } from '../features/feedback/feedbackAPI';
import './Dashboard.css';

function Dashboard() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [error, setError] = useState('');
  const [sortCriteria, setSortCriteria] = useState('timestamp');
  const [filterEmail, setFilterEmail] = useState('');

  useEffect(() => {
    const getFeedback = async () => {
      try {
        const data = await fetchFeedback();
        setFeedbackData(data);
      } catch (err) {
        setError('Error fetching feedback: ' + err.message);
      }
    };

    getFeedback();
  }, []);

  const filteredFeedback = feedbackData.filter((feedback) =>
    feedback.email.toLowerCase().includes(filterEmail.toLowerCase())
  );

  const sortedFeedback = filteredFeedback.sort((a, b) => {
    if (sortCriteria === 'email') {
      return a.email.localeCompare(b.email);
    }
    else if(sortCriteria==='userName'){
      return a.userName.localeCompare(b.userName);
    }
    else if(sortCriteria=='criteria'){
      return a.criteria.localeCompare(b.criteria);
    }
    else if (sortCriteria === 'timestamp') {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    }
    return 0;
  });

  return (
    <div className="page">
      <h1>Feedback Dashboard</h1>
      {error && <div className="error">{error}</div>}

      <div>
        <label htmlFor="emailFilter">Filter by Email: </label>
        <input
          type="text"
          id="emailFilter"
          value={filterEmail}
          onChange={(e) => setFilterEmail(e.target.value)}
          placeholder="Enter email to filter"
        />
      </div>

      <div>
        <label htmlFor="sortCriteria">Sort by: </label>
        <select
          id="sortCriteria"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="timestamp">Timestamp</option>
          <option value="email">Email</option>
          <option value='userName'>UserName</option>
          <option value='category'>Category</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Feedback</th>
            <th>Timestamp</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {sortedFeedback.length === 0 ? (
            <tr>
              <td colSpan="4">No feedback available</td>
            </tr>
          ) : (
            sortedFeedback.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.userName}</td>
                <td>{feedback.email}</td>
                <td>{feedback.feedbackText}</td>
                <td>{new Date(feedback.updatedAt).toLocaleString()}</td>
                <td>{feedback.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
