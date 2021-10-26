import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./core/LandingPage/Home";
import AboutUs from "./core/AboutUs/AboutUs";
import ContactUs from "./core/ContactUs/ContactUs";
import Login from "./core/Login/Login";
import Register from "./core/Register/Register";
import Cart from "./core/Cart/Cart";
import UserProfile from "./core/UserProfile/UserProfile";
import AllCategories from "./core/AllCategories/AllCategories";

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
        <Route exact path="/categories" element={<AllCategories />}></Route>

        <Route exact path="/profile" element={<UserProfile />}></Route>

        {/* To Do
        /categories
        /register-seller
        /search-groceries
        /logout  
        */}
      </Routes>
    </Router>
  );
};

export default App;
