import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getCartItems, resetCartListError } from "../../actions/CartActions";
import store from "../../store";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CartItems from "./components/CartItems";
import OrderDetails from "./components/OrderDetails";

const Cart = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateTotal, setUpdateTotal] = useState(true);
  let cart = store.getState().cart;
  store.subscribe(() => {
    cart = store.getState().cart;
    if (cart.error) {
      toast.error(cart.error, {
        toastId: "Cart-List-Error",
      });
      dispatch(resetCartListError());
    }
    if (cart.cartItems) {
      setCartItems(cart.cartItems);
    }
    if (cart.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  const UpdateTotal = () => {
    setUpdateTotal(!updateTotal);
  };

  return (
    <div className="essential-cart">
      <Navbar />
      <div className="cart-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="essential-heading">
                <h1 className="heading_text"> Shopping Cart </h1>

                <div className="graph graph-sm">
                  <img src="img/about/graphic.png" alt="Graph" title="Graph" />
                </div>
              </div>
            </div>
            <CartItems
              cartItems={cartItems}
              loading={loading}
              UpdateTotal={UpdateTotal}
            />
            <OrderDetails cartItems={cartItems} updateTotal={updateTotal} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
