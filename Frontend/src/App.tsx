import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./Pages/Hero";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
// import Sidebar from "./Pages/Sidebar";
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
      {/* <Route path="/sidebar" element={<Sidebar menuItems={[]} />} /> */}
    </Routes>
  );
};

export default App;
