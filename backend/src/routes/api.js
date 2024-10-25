const express = require("express");
const axios = require("axios");
const apiRouter = express.Router();
const {GeminiContentGenerator} = require("../utils/constants");

apiRouter.post("/api/generate", async (req, res) => {
  try {
    const userPrompt = req.body.prompt;
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
    const userPrompt = req.body.prompt + ".Out of ten 10 rate this excuse based on how beleivable it is. only give a numbeer nothing else as answer";
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

module.exports = apiRouter;