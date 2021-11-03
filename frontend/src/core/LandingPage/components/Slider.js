import React from "react";
import { Link } from "react-router-dom";

const Slider = ({ slide }) => {
  return (
    <div className={slide}>
      <div className="container">
        <div className="slider-container">
          <h4 className="slider-sub-title">Fresh Grocery product</h4>
          <div className="animated-area">
            <h1 className="slider-title">Home Delivery Available 24X7</h1>
            <Link to="/search-groceries" className="slider-buttton">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
