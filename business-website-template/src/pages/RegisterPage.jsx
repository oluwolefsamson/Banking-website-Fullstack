import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/register",
        formData
      );

      alert("Registration successfully");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "An unexpected error occurred.";
      setMessage(errorMessage);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <section className="px-5 lg:px-0 bg-white py-16">
      <div className="w-full max-w-[570px] p-4 mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-[22px] leading-9 font-bold mb-10">
          Create an Account{" "}
          <span className="text-primaryColor" style={{ color: "skyblue" }}>
            Join Us
          </span>
          🌟
        </h3>

        <form className="py-4 md:py-0" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Enter Your Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full py-3 bg-skyblue border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 bg-skyblue border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 bg-skyblue border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              style={{ backgroundColor: "skyblue" }}
              className="w-full bg-skyblue text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>

          {message && (
            <div className="mt-5 text-center">
              <p
                className={`text-${
                  message.includes("successful") ? "green" : "red"
                }-500`}
              >
                {message}
              </p>
            </div>
          )}

          <p className="mt-5 text-textColor text-center">
            Already have an account?
            <Link
              to="/login"
              className="text-primaryColor font-medium ml-1"
              style={{ color: "skyblue" }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
