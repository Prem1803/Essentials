import React from "react";
import { Link } from "react-router-dom";

const SingleCategory = () => {
  return (
    <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xl-3">
      <div className="category-boxholder">
        <div className="category-border">
          <div className="img-product">
            <img src="img/cart-details/milk.png" alt="Tomato" />
          </div>
          <h4>Dairy</h4>
          <p>Fresh Dairy Products like Milk, Ghee, Curd etc </p>
          <div className="buttons">
            <Link to="/categories/dairy" className="btn btn-default">
              <i className="fas fa-arrow-circle-right"></i> Shop Now
            </Link>
            <Link to="/categories/dairy" className="btn btn-orange">
              <i className="fas fa-arrow-circle-right"></i> Shop Now{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
