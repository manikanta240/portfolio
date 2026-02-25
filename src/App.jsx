import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Projects from "./pages/Projects";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C9B59C] via-[#E8D5C4] to-[#F5E6D3] text-[#51372C] overflow-x-hidden">
      <Navigation />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
