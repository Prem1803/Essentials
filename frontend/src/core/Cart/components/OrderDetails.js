import React from "react";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  return (
    <div className="cart-detail">
      <div className="row">
        <div className="pl-xl-5 col-lg-8 col-md-8 col-sm-12">
          <div className="form-group">
            <label for="input-promocode">Have a promocode</label>

            <div className="input-group">
              <input
                type="text"
                name="promocode"
                className="form-control"
                placeholder="Enter your promocode"
              />

              <div className="input-group-append">
                <button className="btn" id="button-apply" type="button">
                  Apply
                </button>
              </div>
            </div>
          </div>

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
          <h2>Order summery</h2>

          <p>
            Sub Total{" "}
            <span>
              <i className="fas fa-rupee-sign"></i> 210.00
            </span>
          </p>

          <p>
            Tax{" "}
            <span>
              <i className="fas fa-rupee-sign"></i> 40.00
            </span>
          </p>

          <hr className="divider" />

          <p className="font-medium">
            Total Price{" "}
            <span>
              <i className="fas fa-rupee-sign"></i> 250.00
            </span>
          </p>

          <div className="buttons">
            <Link className="btn btn-block btn-orange" to="/checkout">
              Proceed to checkout
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
