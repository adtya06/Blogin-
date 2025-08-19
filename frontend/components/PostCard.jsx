import React from 'react'

const PostCard = ({ post }) => {
  // Function to format the date nicely (e.g., "August 16, 2025")
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
        <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold mt-4 inline-block">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default PostCard