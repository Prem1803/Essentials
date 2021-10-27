import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ProductReviews from "./components/ProductReviews";

const SingleProduct = () => {
  return (
    <div className="essential-product-detail">
      <Navbar level={1} />
      <div className="product_details">
        <div className="container">
          <ProductDetails />
          <ProductReviews />
        </div>
      </div>
      <Footer level={1} />
    </div>
  );
};

export default SingleProduct;
