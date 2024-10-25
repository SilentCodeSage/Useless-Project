// HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/options"); // Redirect to the options page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 to-red-200 p-5">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to the Excuse Generator!</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        Tired of making excuses? Let our AI-powered Excuse Generator do the work for you! Create personalized excuses for any situation, adjust absurdity levels, and have fun!
      </p>
      <button
        onClick={handleGetStarted}
        className="mt-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
