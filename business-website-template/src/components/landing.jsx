// src/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgb(240, 240, 240)" }}
    >
      <h1 className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
        Welcome to My Project
      </h1>
      <p className="text-base text-center sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
        Your one-stop solution for managing competitions.
      </p>
      <Link to="/login">
        <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white text-sm sm:text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Landing;
