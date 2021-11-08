import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OrderDetails = ({ cartItems, updateTotal }) => {
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const updateSum = () => {
    let sum = 0;
    for (const item of cartItems) {
      sum = sum + item.amount * item.quantity;
    }
    setTotal(sum);
  };
  useEffect(() => {
    updateSum();
  }, [cartItems]);
  useEffect(() => {
    console.log(cartItems);
    updateSum();
  }, [updateTotal]);
  useEffect(() => {
    setTax(total * 0.15);
  }, [total]);
  return (
    <div className="cart-detail">
      <div className="row">
        <div className="pl-xl-5 col-lg-8 col-md-8 col-sm-12">
          <div className="form-group">
            <label>Enter a Note for Delivery Store/Person</label>

            <textarea
              rows="3"
              className="form-control"
              placeholder="Your Note here"
            ></textarea>
          </div>

          <div className="back">
            <Link to="/categories">
              <i className="fa fa-angle-left fa-lg mr-2"></i> Countinue shopping
            </Link>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 ml-auto">
          <h2>Order summary</h2>

          <p>
            Sub Total{" "}
            <span>
              <i className="fas fa-rupee-sign"></i> {total}
            </span>
          </p>

          <p>
            Tax{" "}
            <span>
              <i className="fas fa-rupee-sign"></i> {tax}
            </span>
          </p>

          <hr className="divider" />

          <p className="font-medium">
            Total Price{" "}
            <span>
              <i className="fas fa-rupee-sign"></i> {total + tax}
            </span>
          </p>

          <div className="buttons">
            <Link className="btn btn-block btn-orange" to="/profile">
              Place Order
            </Link>
          </div>

          <p className="read">
            * Read your product carefully and total price before proceeding for
            checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
