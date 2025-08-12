const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./database/db');

const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;