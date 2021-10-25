import React from "react";

const SingleOrder = ({ setShowOrder }) => {
  return (
    <div className="order-list btm-border">
      <ul className="order-img pt-0">
        <li className="img-product">
          <img src="img/cart-details/milk.png" alt="Product" />
        </li>

        <li>
          <p>
            {" "}
            <strong>Milk</strong>
          </p>

          <p> Fresh Cow Milk </p>

          <p> Delivered by supermarket</p>

          <p>
            {" "}
            Price:- <i className="fas fa-rupee-sign"></i> 80{" "}
          </p>
        </li>

        <li className="right-order">
          <p>
            {" "}
            <i className="fa fa-circle" aria-hidden="true"></i>
            <strong> Delivery date 26 sept 2021</strong>
          </p>

          <p> Your order has delivered </p>

          <button
            className="btn order-review"
            onClick={() => {
              setShowOrder(true);
            }}
          >
            <i className="fa fa-star" aria-hidden="true"></i> Rate & Review
          </button>
          <button className="btn order-review">
            <i className="fas fa-shopping-bag"></i> Order Again
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SingleOrder;
