import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CreatePostPage from '../pages/CreatePostPage';
import EditPostPage from '../pages/EditPostPage';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/edit/:id" element={<EditPostPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;