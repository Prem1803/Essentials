import React from "react";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  return (
    <div className="tab-pane fade show active">
      <h2>Wishlist</h2>

      <div className="order-setting">
        <div className="order-main">
          <WishlistItem />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
