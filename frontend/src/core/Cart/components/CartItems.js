import React from "react";
import CoverLoader from "../../Components/CoverLoader";
import SingleCartItem from "./SingleCartItem";

const cartItems = ({ cartItems, loading, UpdateTotal }) => {
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

        {loading ? (
          <CoverLoader />
        ) : (
          <tbody>
            {cartItems &&
              cartItems.map((item, index) => {
                return (
                  <SingleCartItem
                    key={index}
                    cartItem={item}
                    UpdateTotal={UpdateTotal}
                  />
                );
              })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default cartItems;
