import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../src/context/AuthContext';
import { deletePost } from '../src/api';

const PostCard = ({ post, onDelete }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [deleting, setDeleting] = useState(false);

  // Function to format the date nicely (e.g., "August 16, 2025")
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }

    setDeleting(true);
    try {
      await deletePost(post._id);
      if (onDelete) {
        onDelete(); // Refresh the posts list
      }
    } catch (err) {
      console.error('Error deleting post:', err);
      alert('Failed to delete post. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${post._id}`);
  };

  // Check if current user is the author
  const isAuthor = user && post.author?._id === user.id;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">
          By <span className="font-semibold text-blue-600">{post.author?.username || 'Anonymous'}</span> on {formatDate(post.createdAt)}
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h2>
        <p className="text-gray-700 leading-relaxed line-clamp-3">
          {post.content}
        </p>
        
        {isAuthor && (
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleEdit}
              className="flex-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="flex-1 bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 disabled:bg-red-300"
            >
              {deleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard