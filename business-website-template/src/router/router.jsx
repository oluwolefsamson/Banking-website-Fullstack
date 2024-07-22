// src/router/router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FeaturePage from "../pages/FeaturesPage";
import AboutPage from "../pages/AboutPage";
import ClientPage from "../pages/ClientPage";
import ProductPage from "../pages/ProductPage";
import LandingPage from "../pages/LandingPage";
import ContactPage from "../pages/ContactPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/features" element={<FeaturePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/clients" element={<ClientPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
