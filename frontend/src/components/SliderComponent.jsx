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
      const response = await axios.post("https://useless-project-5.onrender.com/api/generate/custom", {
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
    // JSX content remains unchanged
  );
};

export default SliderComponent;
