const express = require("express");
const axios = require("axios");
const connectDB = require("./config/database");
const apiRouter = require("./routes/api");
const app = express();
const PORT = 3003;
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./routes/auth");
app.use(express.json());

const corsOptions = {
  origin: "https://useless-project-frontend.onrender.com",
  methods: "GET,POST",
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));


app.use("/", apiRouter);
app.use("/",authRouter)

connectDB()
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Connection to the database failed: " + err);
    process.exit(1); // Exit the process with an error code
  });
