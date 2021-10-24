import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./core/LandingPage/Home";
import AboutUs from "./core/AboutUs/AboutUs";
import ContactUs from "./core/ContactUs/ContactUs";
import Login from "./core/Login/Login";
import Register from "./core/Register/Register";
import Cart from "./core/Cart/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/my-cart" element={<Cart />}></Route>
        <Route exact path="/about-us" element={<AboutUs />}></Route>
        <Route exact path="/contact-us" element={<ContactUs />}></Route>
        {/* To Do
        /categories
        /register-seller
        /search-groceries
        /profile
        /settings
        /logout  
        */}
      </Routes>
    </Router>
  );
};

export default App;
