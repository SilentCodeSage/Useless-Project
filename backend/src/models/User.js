const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true  
  },
  password: {
    type: String,
    required: true
  },
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Define a method to generate a JWT token
userSchema.methods.getJWT = function () {
  return jwt.sign({ _id: this._id }, "Alumni@LBS$1029", { expiresIn: "1h" });
};

// Define a method to compare passwords
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
