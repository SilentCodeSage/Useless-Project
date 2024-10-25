import axios from "axios";
import React, { useState } from "react";

const Evaluate = () => {
  const [excuse, setExcuse] = useState("");
  const [score, setScore] = useState(null); // State to store the score

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Evaluating excuse:", excuse);
    await evaluateExcuse();
  };

  const evaluateExcuse = async () => {
    try {
      const result = await axios.post("http://localhost:3003/api/evaluate", {
        prompt: excuse,
      });

      // Assuming the response has a score in a specific structure, adjust as necessary
      const scoreValue = result.data.candidates[0].content.parts[0].text; // Update based on your API response
      setScore(scoreValue); // Set the score state
      console.log(scoreValue); // Log the score value here
    } catch (error) {
      console.error("Error evaluating excuse:", error);
      setScore(null); // Reset score if there's an error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h2 className="mb-6 text-4xl font-bold text-center text-gray-700">
          Excuse Evaluator
        </h2>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text text-lg text-gray-600">
              What's your situation? Share the excuse you have in mind!
            </span>
          </label>
          <textarea
            value={excuse}
            onChange={(e) => setExcuse(e.target.value)}
            placeholder="Type your excuse here..."
            className="textarea textarea-bordered border-gray-300 bg-gray-50 text-gray-800 rounded-lg py-3 px-4 resize-none h-32"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full py-3 text-lg rounded-full shadow-md transform hover:scale-105 transition-transform duration-200"
        >
          Evaluate
        </button>

        {/* Display the score if it exists */}
        {score !== null && (
          <div className="mt-4 text-center text-lg font-semibold text-gray-800">
            Your Excuse Score: <span className="text-green-600">{score}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Evaluate;
