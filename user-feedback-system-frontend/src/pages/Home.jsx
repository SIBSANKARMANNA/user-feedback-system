import React from 'react';

function Home() {
  return (
    <div className="page">
      <h1>Welcome to the User Feedback System</h1>
      <p>We value your opinion! Submit your feedback to help us improve.</p>
      <p>
        On this website, you can:
      </p>
      <ul>
        <li>Submit your feedback with your username, email, and feedback message.</li>
        <li>Optionally, select a category for your feedback (e.g., Feature Request, Bug Report, General Feedback).</li>
        <li>View submitted feedback in a dashboard with options to sort and filter feedback.</li>
      </ul>
      <p>
        Feel free to share any thoughts, suggestions, or issues you encountered.
      </p>
    </div>
  );
}

export default Home;

