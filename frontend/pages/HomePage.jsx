import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:4000/api';
import LoadingSpinner from '../components/LoadingSpinner'
import PostCard from '../components/PostCard'
import NoPostsMessage from '../components/NoPostsMessage'

const HomePage = () => {
  // State to store the list of posts
  const [posts, setPosts] = useState([]);
  // State to handle the loading status
  const [loading, setLoading] = useState(true);
  // State to handle any errors during data fetching
  const [error, setError] = useState(null);

  // useEffect hook to fetch data from the API when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Set loading to true before starting the fetch
        setLoading(true);
        // Make a GET request to the /posts endpoint
        const response = await axios.get(`${API_BASE_URL}/posts`);
        // Update the posts state with the data from the API
        setPosts(response.data);
        // Clear any previous errors
        setError(null);
      } catch (err) {
        // If an error occurs, update the error state
        setError('Failed to fetch posts. Please make sure the server is running and try again.');
        console.error("API Fetch Error:", err);
      } finally {
        // Set loading to false once the fetch is complete (either success or fail)
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // The empty dependency array [] means this effect runs only once on mount

  // --- Render Logic ---

  // Display a loading spinner while data is being fetched
  if (loading) {
    return <LoadingSpinner />;
  }

  // Display an error message if the fetch failed
  if (error) {
    return <div className="text-center text-red-500 font-semibold p-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Latest Posts</h1>
       {posts.length > 0 ? (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <PostCard key={post._id} post={post} />
            ))}
         </div>
       ) : (
         <NoPostsMessage />
       )}
    </div>
  );
};

export default HomePage;