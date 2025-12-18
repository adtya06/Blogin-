# Blogin' - Full Stack Blogging Platform

A complete MERN stack blogging application with user authentication and full CRUD operations for blog posts.

## 📋 Project Overview

**Backend**: Node.js, Express, MongoDB, JWT Authentication  
**Frontend**: React, React Router, Tailwind CSS, Axios

## ✅ Completed Features

### Backend
- ✅ User registration with validation (fullName, username, email, password)
- ✅ User login with JWT token generation
- ✅ Password hashing with bcrypt
- ✅ JWT authentication middleware
- ✅ Full CRUD operations for posts:
  - Create post (authenticated)
  - Read all posts (public)
  - Read single post (public)
  - Update post (authenticated, owner only)
  - Delete post (authenticated, owner only)
- ✅ Input validation with express-validator
- ✅ MongoDB models for User and Post with relationships

### Frontend
- ✅ User registration and login pages
- ✅ Authentication context for global state management
- ✅ Homepage displaying all posts
- ✅ Create new post page (protected route)
- ✅ Edit post page (protected route, owner only)
- ✅ Delete post functionality with confirmation
- ✅ Responsive UI with Tailwind CSS
- ✅ Loading states and error handling
- ✅ Navbar with user authentication state

## 🚀 Getting Started

### Prerequisites

Before running this project, you need:
1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** - Either:
   - Local installation: [Download here](https://www.mongodb.com/try/download/community)
   - Or use MongoDB Atlas (cloud): [Sign up here](https://www.mongodb.com/cloud/atlas)

### Installation Steps

#### 1. Install Node.js (if not already installed)

Download and install Node.js from https://nodejs.org/

Verify installation:
```bash
node --version
npm --version
```

#### 2. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env file with your MongoDB connection string and JWT secret
# Update these values:
#   DB_CONNECT=mongodb://localhost:27017/blogin  (or your MongoDB Atlas URI)
#   JWT_SECRET=your_random_secret_key_here
```

#### 3. Setup Frontend

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
```

#### 4. Start MongoDB

**If using local MongoDB:**
```bash
# Windows (run as service or):
mongod

# Mac/Linux:
sudo systemctl start mongod
```

**If using MongoDB Atlas:**
- Update the `DB_CONNECT` in `backend/.env` with your Atlas connection string

#### 5. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
node server.js
```
Server will start on http://localhost:4000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
App will start on http://localhost:5173

## 📱 Using the Application

1. **Register**: Create a new account at `/register`
2. **Login**: Sign in at `/login`
3. **View Posts**: Browse all posts on the homepage
4. **Create Post**: Click "+ Create Post" button (requires login)
5. **Edit/Delete**: Manage your posts with Edit and Delete buttons (only visible on your posts)

## 🔐 API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post (requires auth)
- `PUT /api/posts/:id` - Update post (requires auth + ownership)
- `DELETE /api/posts/:id` - Delete post (requires auth + ownership)

## 📁 Project Structure

```
blogin/
├── backend/
│   ├── controllers/       # Request handlers
│   ├── database/         # MongoDB connection
│   ├── middlewares/      # Auth middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── app.js           # Express setup
│   ├── server.js        # Entry point
│   └── .env             # Environment variables
│
└── frontend/
    ├── components/      # Reusable UI components
    ├── pages/          # Page components
    ├── src/
    │   ├── api.js      # API client
    │   ├── App.jsx     # Main app
    │   └── context/    # React context
    └── package.json
```

## 🛠️ Tech Stack

**Backend:**
- Express.js - Web framework
- MongoDB & Mongoose - Database
- JWT - Authentication
- bcryptjs - Password hashing
- express-validator - Input validation
- CORS - Cross-origin resource sharing

**Frontend:**
- React - UI library
- React Router - Routing
- Tailwind CSS - Styling
- Axios - HTTP client
- Context API - State management

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Make sure MongoDB is running
- Check `DB_CONNECT` in `.env` is correct

**Port Already in Use:**
- Backend: Change `PORT` in `backend/.env`
- Frontend: Vite will automatically suggest a different port

**CORS Errors:**
- Verify frontend is calling correct backend URL in `frontend/src/api.js`

## 📝 License

This project is open source and available for educational purposes.
