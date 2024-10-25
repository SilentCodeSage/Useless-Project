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
      <div className="mt-6">
        <button
          onClick={handleCreateExcuse}
          className="mt-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Create Excuse
        </button>
        <button
          onClick={handleEvaluateExcuse}
          className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Evaluate Excuse
        </button>
        <button
          onClick={handlePersonalizedExcuse}
          className="mt-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Create Personalized Excuse
        </button>
      </div>
    </div>
  );
};

export default OptionsPage;
