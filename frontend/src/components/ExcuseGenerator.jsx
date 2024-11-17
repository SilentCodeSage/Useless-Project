import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExcuseGenerator = () => {
  const [situation, setSituation] = useState("");
  const [excuses, setExcuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setExcuses([]);

    try {
      const response = await axios.post(
        "https://useless-project-5.onrender.com/api/generate",
        {
          prompt: situation,
        }
      );

      console.log("API Response:", response.data);

      if (response.data && response.data.candidates && response.data.candidates.length > 0) {
        const text = response.data.candidates[0].content.parts[0].text;
        const situationsArray = text.split(",").map((excuse) => excuse.trim());
        setExcuses(situationsArray);
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (err) {
      console.error("Error fetching excuses:", err);
      setError("Failed to generate excuses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-red-400 p-5 animate-gradient-x">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-600 animate-text-sparkle">
        Excuse Generator
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl transform transition-all duration-500 hover:scale-105"
      >
        <label className="block mb-4">
          <span className="text-gray-700 text-lg font-semibold">
            What's your situation?
          </span>
          <textarea
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="Type your situation here..."
            className="textarea textarea-bordered border-gray-300 bg-gray-50 text-gray-800 rounded-lg py-3 px-4 resize-none h-32 w-full mt-2 focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-red-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out animate-pulse-slow"
        >
          Generate Excuses
        </button>
      </form>

      {loading && (
        <p className="mt-6 text-lg text-gray-600 animate-pulse">
          Generating excuses...
        </p>
      )}

      {error && <p className="mt-6 text-lg text-red-600">{error}</p>}

      {excuses.length > 0 && (
        <div className="mt-8 w-full max-w-xl">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-600">
            Generated Excuses
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {excuses.map((excuse, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-center transform transition-all duration-500 hover:scale-105"
              >
                <p className="text-lg text-gray-700">{excuse}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <Link to="/customExcuse" className="text-blue-600 text-lg font-semibold hover:underline">
          Get a More Personalized Excuse
        </Link>
      </div>
    </div>
  );
};

export default ExcuseGenerator;
