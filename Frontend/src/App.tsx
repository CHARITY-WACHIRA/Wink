import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./Pages/Hero";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Loading from "./Pages/Loading";
import Login from "./Pages/Login";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
