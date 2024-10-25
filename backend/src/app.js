const express = require("express");
const axios = require("axios");
const apiRouter = require("./routes/api");
const app = express();
const PORT = 3003;
require('dotenv').config();

app.use(express.json());
app.use('/', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});