import React from "react";
import { Route, Routes } from "react-router-dom";
// Pages:
import ScrollFromTop from "./Pages/ScrollFromTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
// Components:
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App bg-dark-color-3 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Scroll From Top */}
      <ScrollFromTop />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;