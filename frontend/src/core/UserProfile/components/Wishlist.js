import React, { useEffect, useState } from "react";
import store from "../../../store";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  let wishlist = store.getState().wishlist;
  const [wishlistItems, setWishListItems] = useState([]);
  store.subscribe(() => {
    wishlist = store.getState().wishlist;
    if (wishlist.wishlistItems) {
      setWishListItems(wishlist.wishlistItems);
    }
  });
  useEffect(() => {
    if (wishlist.wishlistItems) {
      setWishListItems(wishlist.wishlistItems);
    }
  }, []);
  return (
    <div className="tab-pane fade show active">
      <h2>Wishlist</h2>

      <div className="order-setting">
        <div className="order-main">
          {wishlistItems &&
            wishlistItems.map((product, index) => {
              return <WishlistItem key={index} product={product} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
