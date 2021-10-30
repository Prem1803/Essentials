import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./core/LandingPage/Home";
import AboutUs from "./core/AboutUs/AboutUs";
import ContactUs from "./core/ContactUs/ContactUs";
import Login from "./core/Login/Login";
import Register from "./core/Register/Register";
import Cart from "./core/Cart/Cart";
import UserProfile from "./core/UserProfile/UserProfile";
import AllCategories from "./core/AllCategories/AllCategories";
import CategoryWiseProducts from "./core/CategoryWiseProducts/CategoryWiseProducts";
import SearchWiseProducts from "./core/CategoryWiseProducts/SearchWiseProducts";
import SingleProduct from "./core/SingleProduct/SingleProduct";

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
        <Route
          exact
          path="/search-groceries"
          element={<SearchWiseProducts />}
        ></Route>
        <Route
          exact
          path="/categories/:category"
          element={<CategoryWiseProducts />}
        ></Route>
        <Route
          exact
          path="/product/:product"
          element={<SingleProduct />}
        ></Route>

        <Route exact path="/profile" element={<UserProfile />}></Route>

        {/* To Do
        /register-seller
        /logout  
        */}
      </Routes>
    </Router>
  );
};

export default App;
