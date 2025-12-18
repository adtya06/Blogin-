# Blogin' Backend API

A RESTful API for the Blogin' blogging platform built with Node.js, Express, MongoDB, and JWT authentication.

## Features

- User registration and login with JWT authentication
- Full CRUD operations for blog posts
- Protected routes with authentication middleware
- Password hashing with bcrypt
- Input validation with express-validator

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Update the following variables:
- `PORT`: Server port (default: 4000)
- `DB_CONNECT`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation (use a strong random string)

### 3. Start MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas for cloud hosting.

### 4. Run the Server

```bash
node server.js
```

The server will start on `http://localhost:4000`.

## API Endpoints

### User Authentication

- `POST /api/users/register` - Register a new user
  - Body: `{ fullName, username, email, password }`
- `POST /api/users/login` - Login user
  - Body: `{ email, password }`

### Posts (CRUD)

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post by ID
- `POST /api/posts` - Create new post (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ title, content }`
- `PUT /api/posts/:id` - Update post (requires authentication & ownership)
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ title, content }`
- `DELETE /api/posts/:id` - Delete post (requires authentication & ownership)
  - Headers: `Authorization: Bearer <token>`

## Project Structure

```
backend/
├── app.js              # Express app setup
├── server.js           # Server entry point
├── controllers/        # Request handlers
├── database/           # Database connection
├── middlewares/        # Authentication middleware
├── models/            # Mongoose schemas
└── routes/            # API route definitions
```
