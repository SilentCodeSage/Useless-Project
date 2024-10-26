import React from "react";
import { useNavigate } from "react-router-dom";

const OptionsPage = () => {
  const navigate = useNavigate();

  const handleCreateExcuse = () => {
    navigate("/contextualExcuse");
  };

  const handleEvaluateExcuse = () => {
    navigate("/evaluate");
  };

  const handlePersonalizedExcuse = () => {
    navigate("/customExcuse");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 via-pink-200 to-red-400 p-5 animate-gradient-x">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-600 animate-text-sparkle">
        Choose an Option
      </h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-md">
        Select an option below to create, evaluate, or customize excuses to fit any situation. Get creative and have fun with our excuse generation tools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 w-full max-w-4xl">
        <div className="text-center transform transition-all duration-500 hover:scale-105">
          <button
            onClick={handleCreateExcuse}
            className="w-full py-5 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Create Excuse
          </button>
          <p className="mt-3 text-gray-600">
            Generate a random excuse for any situation.
          </p>
        </div>

        <div className="text-center transform transition-all duration-500 hover:scale-105">
          <button
            onClick={handleEvaluateExcuse}
            className="w-full py-5 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Evaluate Excuse
          </button>
          <p className="mt-3 text-gray-600">
            Analyze and score the believability of an excuse.
          </p>
        </div>

        <div className="text-center transform transition-all duration-500 hover:scale-105">
          <button
            onClick={handlePersonalizedExcuse}
            className="w-full py-5 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Create Personalized Excuse
          </button>
          <p className="mt-3 text-gray-600">
            Adjust excuse details for a tailored, unique response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptionsPage;
