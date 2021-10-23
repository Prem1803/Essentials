import React from "react";
import { Link } from "react-router-dom";

const SingleItem = () => {
  return (
    <div className="item ">
      <div className="product-holder">
        <Link to="/product">
          <div className="img-product">
            <img src="img/product-1.png" className="img-fluid" alt="Product" />
          </div>
        </Link>
        <div className="p-content">
          <div className="p-cate"> Grain, Breakfast, Fresh</div>
          <div className="p-title">
            {" "}
            <span className="product-name">
              <Link to="/product">Egg </Link>
            </span>
            <span className="seller-details">
              Sold by:
              <span className="seller-name">
                <Link to="/store">General store</Link>
              </span>
            </span>
          </div>
          <div className="p-price">
            <i className="fas fa-rupee-sign"></i> 20{" "}
            <span>
              {" "}
              <i className="far fa-star"></i> <i className="far fa-star"></i>{" "}
              <i className="far fa-star"></i> <i className="far fa-star"></i>{" "}
              <i className="far fa-star"></i>
            </span>
          </div>
          <div className="p-buttonarea">
            <div className="btn btn-pcart">
              {" "}
              Add To Cart <i className="far fa-shopping-cart"></i>
            </div>
            <span className="pull-right">
              <div className="btn-wish">
                <i className="far fa-heart"> </i>{" "}
              </div>{" "}
              <div className="btn-wish">
                <i className="fas fa-eye"></i>
              </div>
            </span>
          </div>
        </div>
        <div className="salebutton"> Sale</div>
      </div>
    </div>
  );
};

export default SingleItem;
