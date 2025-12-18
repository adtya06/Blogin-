const mongoose = require('mongoose');

function connectDB() {
    mongoose.connection.once("open", () => {
    console.log("✅ Connected to MongoDB Atlas");
    });

    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('MongoDB connection error:', err);
        });
}

module.exports = connectDB;