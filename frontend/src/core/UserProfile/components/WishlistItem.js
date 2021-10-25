import React from "react";
import { Link } from "react-router-dom";
const WishlistItem = () => {
  return (
    <div className="order-main-top btm-border">
      <ul className="order-img pt-0">
        <li className="img-product">
          <Link to="/categories">
            <img src="img/cart-details/milk.png" alt="Product " />
          </Link>
        </li>

        <li>
          <p>
            {" "}
            <strong>
              <Link to="/categories">Cow Milk</Link>
            </strong>
          </p>

          <p> Green vegetables </p>

          <p> Delivered by supermarket</p>

          <p>
            {" "}
            Price:- <i className="fas fa-rupee-sign"></i> 65{" "}
          </p>
        </li>

        <li className="right-order">
          <button className="btn btn-del">
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WishlistItem;
