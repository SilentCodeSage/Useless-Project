// OptionsPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const OptionsPage = () => {
  const navigate = useNavigate();

  const handleCreateExcuse = () => {
    navigate("/contextualExcuse"); // Redirect to the ExcuseGenerator component
  };

  const handleEvaluateExcuse = () => {
    navigate("/evaluate"); // Redirect to the Evaluate component
  };

  const handlePersonalizedExcuse = () => {
    navigate("/customExcuse"); // Redirect to the SliderComponent
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 to-red-200 p-5">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose an Option</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
        Select an option below to create, evaluate, or customize excuses to fit any situation. Get creative or simply
        have fun with our excuse generation tools.
      </p>
      
      <div className="flex flex-row justify-center space-x-6 mt-6">
        <div className="text-center">
          <button
            onClick={handleCreateExcuse}
            className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition duration-300"
          >
            Create Excuse
          </button>
          <p className="mt-2 text-gray-600">Generate a random excuse for any situation.</p>
        </div>

        <div className="text-center">
          <button
            onClick={handleEvaluateExcuse}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition duration-300"
          >
            Evaluate Excuse
          </button>
          <p className="mt-2 text-gray-600">Analyze and score the believability of an excuse.</p>
        </div>

        <div className="text-center">
          <button
            onClick={handlePersonalizedExcuse}
            className="bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition duration-300"
          >
            Create Personalized Excuse
          </button>
          <p className="mt-2 text-gray-600">Adjust excuse details for a tailored, unique response.</p>
        </div>
      </div>
    </div>
  );
};

export default OptionsPage;