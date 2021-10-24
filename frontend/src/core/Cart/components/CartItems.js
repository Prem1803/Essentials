import React from "react";
import SingleCartItem from "./SingleCartItem";

const cartItems = () => {
  return (
    <div className="table-responsive">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Product</th>

            <th>Price</th>

            <th>Quality</th>

            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <SingleCartItem />
          <SingleCartItem />
          <SingleCartItem />
        </tbody>
      </table>
    </div>
  );
};

export default cartItems;
