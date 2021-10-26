import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  return (
    <div className="product-layout product-grid col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="product-holder product-thumb">
        <div className="image">
          <Link to="/product/634">
            <div className="img-product">
              <img
                src="../img/cart-details/milk.png"
                className="img-fluid"
                alt="Product"
              />
            </div>
          </Link>
        </div>
        <div className="p-content caption">
          <div className="p-cate"> Breakfast Fresh</div>
          <div className="p-title">
            {" "}
            <Link to="/product/634"> Milk </Link>
          </div>
          <div className="p-price">
            $10.00{" "}
            <span className="pull-right">
              {" "}
              <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>{" "}
              <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>{" "}
              <i className="fa fa-star-o"> </i>
            </span>
          </div>
          <div className="p-buttonarea">
            <button className="btn btn-pcart">
              Add To Cart <i className="far fa-shopping-cart"></i>
            </button>
            <span className="pull-right">
              <button className="btn btn-wish">
                <i className="far fa-heart"> </i>{" "}
              </button>{" "}
              <button className="btn btn-wish">
                <i className="fas fa-eye"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
