import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CartItems from "./components/CartItems";
import OrderDetails from "./components/OrderDetails";

const Cart = () => {
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
            <CartItems />
            <OrderDetails />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
