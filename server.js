// server.js
import express from 'express';
import dotenv from 'dotenv';
import supplyRoutes from './routes/classroomsuppliesRoutes.js';
import connectDB from './config/database.js';

dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());

// Supply routes
app.use('/api/supplies', supplyRoutes);

// Root route
app.get('/', (req, res) => {
  res.send(`Hello! Running in ${process.env.NODE_ENV || 'development'} mode.`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});
                

