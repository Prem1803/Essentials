import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./core/LandingPage/Home";
import AboutUs from "./core/AboutUs/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
