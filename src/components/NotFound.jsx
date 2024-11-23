import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 flex items-center justify-center">
      <div className="text-center">
        {/* Icon or Image */}
        <div className="mb-6 flex justify-center">
          <img src="https://cdn-icons-png.flaticon.com/512/7486/7486803.png" alt="error_img" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-6">
          Oops! The page you're looking for doesn't exist. It might have been removed, or the link could be incorrect.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="bg-gradient-to-r from-gray-600 to-gray-400 text-white px-6 py-3 rounded-lg shadow-md hover:from-gray-500 hover:to-gray-300 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
