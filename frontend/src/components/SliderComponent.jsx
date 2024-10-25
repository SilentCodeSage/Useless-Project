import React, { useState, useEffect } from "react";
import axios from "axios";

const SliderComponent = () => {
  const [sentimentality, setSentimentality] = useState(5);
  const [absurdity, setAbsurdity] = useState(5);
  const [tone, setTone] = useState(5); // New tone slider
  const [urgency, setUrgency] = useState(5); // New urgency slider
  const [emotionalImpact, setEmotionalImpact] = useState(5); // New emotional impact slider
  const [situation, setSituation] = useState("");
  const [excuses, setExcuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [locationDetails, setLocationDetails] = useState({});

  useEffect(() => {
    // Fetch location and weather on component mount
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = "16dd3aaedf6a386cb63933d7f81edf7b"; // Replace with your weather API key
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

        try {
          const response = await fetch(weatherApiUrl);
          const data = await response.json();
          const temperature = data.main.temp; // Temperature in Celsius
          const location = data.name; // Location name, e.g., city

          // Log location details in the console
          console.log(`Location: ${location}, Temperature: ${temperature}°C`);
          setLocationDetails({ location, temperature });
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
      (error) => console.error("Error getting location:", error)
    );
  }, []);

  const handleButtonClick = async () => {
    setLoading(true);
    setError("");
    setExcuses([]);

    try {
      const response = await axios.post("http://localhost:3003/api/generate/custom", {
        prompt: situation,
        sentimentality,
        absurdity,
        tone,
        urgency,
        emotionalImpact,
      });

      const excusesText = response.data.candidates[0].content.parts[0].text;
      const excusesArray = excusesText.split(",").map((excuse) => excuse.trim());
      setExcuses(excusesArray);
    } catch (err) {
      setError("Failed to generate excuses. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 to-red-200 p-5">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Create Customized Excuses
      </h2>

      <div className="w-full max-w-xl mb-8">
        <label className="block text-lg text-gray-700 mb-2">
          Describe Your Situation:
        </label>
        <textarea
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
          placeholder="Type your situation here..."
          className="textarea textarea-bordered border-gray-300 bg-white text-gray-800 rounded-lg py-3 px-4 resize-none h-32 w-full"
          required
        />
      </div>

      <div className="w-full max-w-xl">
        <div className="mb-8">
          <label className="block text-lg text-gray-700 mb-2">
            Sentimentality: {sentimentality}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={sentimentality}
            onChange={(e) => setSentimentality(Number(e.target.value))}
            className="range range-primary w-full"
          />
        </div>

        <div className="mb-8">
          <label className="block text-lg text-gray-700 mb-2">
            Absurdity: {absurdity}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={absurdity}
            onChange={(e) => setAbsurdity(Number(e.target.value))}
            className="range range-secondary w-full"
          />
        </div>

        <div className="mb-8">
          <label className="block text-lg text-gray-700 mb-2">
            Tone: {tone}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={tone}
            onChange={(e) => setTone(Number(e.target.value))}
            className="range range-tertiary w-full"
          />
        </div>

        <div className="mb-8">
          <label className="block text-lg text-gray-700 mb-2">
            Urgency: {urgency}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={urgency}
            onChange={(e) => setUrgency(Number(e.target.value))}
            className="range range-senary w-full"
          />
        </div>

        <div className="mb-8">
          <label className="block text-lg text-gray-700 mb-2">
            Emotional Impact: {emotionalImpact}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={emotionalImpact}
            onChange={(e) => setEmotionalImpact(Number(e.target.value))}
            className="range range-septenary w-full"
          />
        </div>
      </div>

      <button
        onClick={handleButtonClick}
        className="mt-8 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300"
      >
        Generate Excuses
      </button>

      {loading && <p className="mt-4 text-lg text-gray-600">Generating excuses...</p>}
      {error && <p className="mt-4 text-lg text-red-600">{error}</p>}
      {excuses.length > 0 && (
        <div className="mt-6 w-full max-w-xl grid grid-cols-1 gap-4">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Generated Excuses
          </h3>
          {excuses.map((excuse, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
              <p className="text-lg text-gray-700">{excuse}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SliderComponent;
