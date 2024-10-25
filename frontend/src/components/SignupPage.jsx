import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-up logic here, e.g., API call
    console.log("Sign Up Data: ", formData);
    navigate("/"); // Redirect to home page after sign up
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 to-pink-400 p-8">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">Sign Up</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
        Join us to start creating, evaluating, and personalizing your excuses. Sign up and get started!
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md transition-transform transform hover:scale-105"
      >
        {/** Input Fields */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white shadow-md border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-pink-400 focus:border-pink-500 transition duration-300 ease-in-out"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white shadow-md border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-pink-400 focus:border-pink-500 transition duration-300 ease-in-out"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="bg-white shadow-md border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-pink-400 focus:border-pink-500 transition duration-300 ease-in-out"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
