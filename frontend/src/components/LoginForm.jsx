import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-lg shadow-lg w-96"
      >
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Login
        </h2>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-gray-600">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="input input-bordered border-gray-300 bg-gray-100 text-gray-800"
            required
          />
        </div>
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text text-gray-600">Password</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="input input-bordered border-gray-300 bg-gray-100 text-gray-800"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
