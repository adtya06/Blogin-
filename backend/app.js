const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./database/db');

const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');

connectDB();

// CORS configuration for production
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;