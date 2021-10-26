import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ListCategories from "./components/ListCategories";

const AllCategories = () => {
  return (
    <div className="essential-category">
      <Navbar />
      <div className="category-section">
        <div className="container">
          <div className="row">
            <div className="essential-heading">
              <h4>Services for You</h4>
              <div className="heading-dots">
                <h1 className="heading_text">
                  <span className="heading_circle">Explor By Category</span>{" "}
                </h1>
              </div>
            </div>
          </div>
          <ListCategories />
        </div>
        <div className="sideImg1">
          <img src="img/about/left-side-img.png" alt="Category" />
        </div>
        <div className="sideImg2">
          <img src="img/about/right-side-img.png" alt="Category" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCategories;
