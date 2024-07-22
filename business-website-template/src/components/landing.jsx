// src/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-center bg-gray-100"
      style={{ backgroundColor: "rgb(240, 240, 240)" }} // RGB background color
    >
      <h1 className="text-4xl font-bold mb-6">Welcome to My Project</h1>
      <p className="text-lg mb-8">
        Your one-stop solution for managing competitions.
      </p>
      <Link to="/login">
        <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Landing;
