const express = require("express");
const authRouter = express.Router();



authRouter.post("/signup", async (req, res) => {
  try {
    let { name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new alumni record
    const user = new userRegis({
      admNo,
      name,
      branch,
      graduationDate: parsedGraduationDate,
      email,
      password: hashedPassword,
      regStatus: true,
    });

    // Save the alumni record to the database
    await alumni.save();
    res.status(201).send({ message: "Registration Success", alumni });
  } catch (error) {
    console.log(error);
    res.status(500).send("Sign Up failed. Please try again.");
  }
});
