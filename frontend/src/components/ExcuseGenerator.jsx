import axios from "axios";
import React, { useState } from "react";

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
      const response = await axios.post("http://localhost:3003/api/generate", {
        prompt: situation,
      });

      console.log("API Response:", response.data); // Log the response

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 to-red-200 p-5">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-6">
        Excuse Generator
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl transition-transform transform hover:scale-105"
      >
        <label className="block mb-4">
          <span className="text-gray-700 text-lg font-semibold">
            What's your situation?
          </span>
          <textarea
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="Type your situation here..."
            className="textarea textarea-bordered border-gray-300 bg-gray-50 text-gray-800 rounded-lg py-3 px-4 resize-none h-32 w-full mt-2"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-red-500 rounded-full shadow-lg hover:opacity-90 transition duration-300"
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
          <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Generated Excuses
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {excuses.map((excuse, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105"
              >
                <p className="text-lg text-gray-700">{excuse}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcuseGenerator;
