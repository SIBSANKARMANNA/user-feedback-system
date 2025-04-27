import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import feedbackRoutes from './routes/feedbackRoutes.js'; // we will create this soon
import { notFound,errorHandler } from './middleware/errorMiddleware.js'; // optional for better error messages
import connectDB from './config/db.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON body

connectDB();

// Routes
app.use('/feedback', feedbackRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('User Feedback System API is running 🚀');
});

// Error Middleware
app.use(notFound);
app.use(errorHandler); // optional centralized error handling

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection failed:', err.message));
