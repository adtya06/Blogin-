const mongoose = require('mongoose');

console.log("ENV CHECK:", {
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV: process.env.NODE_ENV,
});

function connectDB() {
  mongoose.connection.once("open", () => {
    console.log("✅ Connected to MongoDB Atlas");
  });

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
}

module.exports = connectDB;
