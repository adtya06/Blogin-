# Blogin' Frontend

A modern blogging platform frontend built with React, React Router, Tailwind CSS, and Axios.

## Features

- User authentication (register, login, logout)
- View all blog posts
- Create, edit, and delete your own posts
- Responsive design with Tailwind CSS
- Protected routes for authenticated users
- Real-time authentication state management

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Backend API

The frontend expects the backend API to run on `http://localhost:4000`. If your backend uses a different port, update the `API_BASE_URL` in [src/api.js](src/api.js#L3).

### 3. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── src/
│   ├── api.js           # API client with axios
│   ├── App.jsx          # Main app component with routes
│   ├── main.jsx         # Entry point
│   ├── context/         # React context (Auth)
│   └── assets/          # Static assets
├── components/
│   ├── Navbar.jsx       # Navigation bar
│   ├── PostCard.jsx     # Post display card
│   ├── LoadingSpinner.jsx
│   └── NoPostsMessage.jsx
└── pages/
    ├── HomePage.jsx         # List all posts
    ├── LoginPage.jsx        # User login
    ├── RegisterPage.jsx     # User registration
    ├── CreatePostPage.jsx   # Create new post
    └── EditPostPage.jsx     # Edit existing post
```

## User Flow

1. **Register/Login**: Create an account or sign in
2. **View Posts**: Browse all blog posts on the homepage
3. **Create Post**: Click "+ Create Post" when logged in
4. **Edit/Delete**: Manage your own posts with Edit and Delete buttons

## Authentication

- JWT tokens are stored in localStorage
- Auth state is managed via React Context
- Protected routes redirect to login if not authenticated
- Only post authors can edit or delete their posts

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
