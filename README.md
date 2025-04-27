# User Feedback System
This project is a User Feedback System where users can submit feedback about a website or application, and the system allows feedback filtering and sorting. Admins can view the feedback and manage it through a dashboard.

## Table of Contents:
Project Description

1. Technologies Used

2. Installation & Setup

3. How to Run Locally

4. Architecture & Flow

5. Features


### Project Description:
The User Feedback System is designed to allow users to submit feedback with their username, email, and feedback message. They can optionally select a category such as Feature Request, Bug Report, or General Feedback. The application includes a Dashboard where admins can sort and filter the feedback.

### Technologies Used:
Frontend: React.js

Backend: Node.js + Express.js

Database: MongoDB (using MongoDB Atlas for cloud hosting)

State Management: Redux

API: RESTful API using Express.js

CSS: Custom Styles (Optional: can use libraries like Bootstrap or Material-UI)

Authentication: JWT (Optional, based on further implementation)

### Installation & Setup:
To get started, clone the repository and follow the instructions below to set up both the frontend and backend parts of the application.

Prerequisites
Node.js and npm (Node Package Manager) installed on your machine.

MongoDB Atlas account (for remote MongoDB database).

1. Clone the repository
git clone https://github.com/SIBSANKARMANNA/user-feedback-system.git
cd feedback-system
2. Setup Backend
Navigate to the backend directory:
cd backend
Install the required dependencies:
npm install
Create a .env file to store environment variables like MongoDB URI and JWT secrets:
MONGO_URI=your_mongodb_atlas_connection_url
JWT_SECRET=your_jwt_secret
PORT=5000
Run the backend server:
npm start
The backend should now be running at http://localhost:5000.

3. Setup Frontend
Navigate to the frontend directory:
cd frontend
Install the required dependencies:
npm install
Run the frontend development server:
npm start
The frontend should now be running at http://localhost:3000.

### How to Run Locally:
Once you've set up both the frontend and backend, you can run both servers locally. Ensure that the backend is running on http://localhost:5000 and the frontend on http://localhost:3000.

Start the backend server (in backend directory):
npm start
Start the frontend server (in frontend directory):
npm start
You can now navigate to http://localhost:3000 in your browser to access the application. Feedback can be submitted, and admins can view it in the dashboard.

### Architecture & Flow:
1. Frontend (React.js)
Home Page: Displays an introduction to the feedback system and includes a form to submit feedback with username, email, feedback, and optional category.

Feedback Form: Users can input their feedback and choose an optional category such as Feature Request, Bug Report, or General Feedback.

Dashboard: Admins can view the feedback with options to filter by email or category and sort by timestamp or email.

2. Backend (Node.js + Express.js)
Routes:

POST /feedback: Receives feedback data from the frontend and stores it in the MongoDB database.

GET /feedback: Fetches all feedback from the database and sends it to the frontend for display in the dashboard.

Database (MongoDB): Stores feedback data, including the user's name, email, feedback text, timestamp, and category.

State Management (Redux): Used to manage the state of feedback data on the frontend. Actions and reducers are used to add new feedback and fetch feedback for the dashboard.

Flow:
Feedback Submission:

A user visits the Home Page and fills out the feedback form.

The form submits data (including username, email, feedback text, and category) to the backend API, which stores the data in MongoDB.

Admin Dashboard:

Admins can view all submitted feedback in the Dashboard.

Admins can filter feedback by email or category and sort by timestamp or email to manage and analyze feedback efficiently.

The frontend fetches feedback data from the backend using a GET request and displays it in a table.

### Features:
User Feedback Form: Allows users to submit feedback with optional categorization.

Dashboard for Admin: Displays all feedback, with options for sorting and filtering.

Category Filtering: Admins can filter feedback by Feature Request, Bug Report, and General Feedback.

Sorting Options: Admins can sort feedback by timestamp or email.

Responsive Design: The application is designed to be mobile-friendly.
