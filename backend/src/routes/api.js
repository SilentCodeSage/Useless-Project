const express = require("express");
const axios = require("axios");
const apiRouter = express.Router();
const { GeminiContentGenerator } = require("../utils/constants");

apiRouter.post("/api/generate", async (req, res) => {
  try {
    const userPrompt =
    `${req.body.prompt}. Generate exactly five distinct excuses as separate sentences. Each excuse must be 20 words or more. The excuses should be listed as a single string separated by commas, without any commas within the individual excuses.`;
  
    const apiKey = "AIzaSyARygGMBdAi0o4o6fAWjcayONjunxgU_mU";
    const response = await axios.post(
      `${GeminiContentGenerator}=${apiKey}`,
      {
        contents: [{ parts: [{ text: userPrompt }] }],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
    console.log(response.data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Error fetching AI response:", error);
    res.status(500).send("Error generating response");
  }
});

// Evaluate the excuse input by a user and then rate it
apiRouter.post("/api/evaluate", async (req, res) => {
  try {
    const userPrompt =
      req.body.prompt +
      ".Out of ten 10 rate this excuse based on how beleivable it is. only give a  message about the score and the score.Nothing else";
    const apiKey = "AIzaSyARygGMBdAi0o4o6fAWjcayONjunxgU_mU";
    const response = await axios.post(
      `${GeminiContentGenerator}=${apiKey}`,
      {
        contents: [{ parts: [{ text: userPrompt }] }],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
    console.log(response.data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Error fetching AI response:", error);
    res.status(500).send("Error generating response");
  }
});

apiRouter.post("/api/generate/custom", async (req, res) => {
  try {
    const { prompt, sentimentality, absurdity, weatherDetails } = req.body; 
    
    const userPrompt = `${prompt}. Generate exactly ten distinct excuses based on a sentimentality level of ${sentimentality} and an absurdity level of ${absurdity}. Each excuse should be at least 10 words long, with no commas used within any single excuse. The output should be a single string, with each excuse separated by commas.`;

    const apiKey = "AIzaSyARygGMBdAi0o4o6fAWjcayONjunxgU_mU";
    const response = await axios.post(
      `${GeminiContentGenerator}=${apiKey}`,
      {
        contents: [{ parts: [{ text: userPrompt }] }],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
    console.log(response.data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Error fetching AI response:", error);
    res.status(500).send("Error generating response");
  }
});


// Evaluate custom excuses


module.exports = apiRouter;
