import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';
import { connectDB } from './config/database.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB();

// Routes
app.use('/api/auth', (await import('./routes/authRoutes.js')).default);
app.use('/api/projects', (await import('./routes/projectRoutes.js')).default);
app.use('/api/contact', (await import('./routes/contactRoutes.js')).default);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handler Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`[v0] Backend server running on http://localhost:${PORT}`);
  console.log(`[v0] Environment: ${process.env.NODE_ENV || 'development'}`);
});
