const express = require("express");
const axios = require("axios");
const apiRouter = express.Router();
const { GeminiContentGenerator } = require("../utils/constants");

apiRouter.post("/api/generate", async (req, res) => {
  try {
    const userPrompt =
      req.body.prompt +
      "create a list of excuses seperated by commas and it should only contain that nothing else but should contain atleast 5 excuses and each excuse should contain minimum 10 words";
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
      ".Out of ten 10 rate this excuse based on how beleivable it is. only give a funny message about the score and the score only";
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

    const { prompt, sentimentality, absurdity,weatherDetails } = req.body;
    const userPrompt = `${prompt}. Generate a list of excuses based on a sentimentality level of ${sentimentality} and absurdity level of ${absurdity}. Each excuse should be at least 10 words long, and strictly avoid using commas within any single excuse. The output should be a single string, with each excuse separated by commas, containing exactly 10 unique excuses.`;
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
