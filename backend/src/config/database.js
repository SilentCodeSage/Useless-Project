const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nandunandakishor345:X8jr5NYLH4eJY6EB@nandakishor.784ux.mongodb.net/ExcuseMaker"
  );
};

module.exports = connectDB;