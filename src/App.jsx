import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import ProductDetailPage from "./components/ProductDetailPage.jsx";
import { Footer } from "./components/Footer.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import { Login } from "./components/Login.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
