import React from "react";

const OrderDetails = ({ setShowOrder }) => {
  return (
    <>
      <button
        className="btn btn-right"
        onClick={() => {
          setShowOrder(false);
        }}
      >
        Back to Order List
      </button>
      <h2>My Order</h2>

      <div className="order-setting">
        <div className="btm-border">
          <div className="order-heading pt-0">
            Delivery Time 10 Feb 2020, 8.00AM - 6.00PM
          </div>
        </div>

        <div className="order-main">
          <div className="order-list btm-border">
            <ul className="order-img">
              <li className="img-product">
                <img src="img/cart-details/milk.png" alt="Product" />{" "}
              </li>

              <li>
                <p>
                  {" "}
                  <strong>Fresh Cow Milk</strong>
                </p>

                <p> Milk</p>

                <p> Delivered by supermarket</p>

                <p>
                  {" "}
                  Price:- <i className="fas fa-rupee-sign"></i>65{" "}
                </p>
              </li>
            </ul>
          </div>

          <div className="order-list">
            <div className="total-order">
              <div className="row mb-3">
                <div className="col">
                  <p>Sub Total</p>
                </div>

                <div className="col">
                  <p className="text-right">
                    {" "}
                    <i className="fas fa-rupee-sign"></i>65
                  </p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <p>Delivery Charges</p>
                </div>

                <div className="col">
                  <p className="text-right">
                    {" "}
                    <i className="fas fa-rupee-sign"></i>5
                  </p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <p>Service Tax</p>
                </div>

                <div className="col">
                  <p className="text-right">
                    {" "}
                    <i className="fas fa-rupee-sign"></i>10
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <p>
                    {" "}
                    <strong> Total </strong>
                  </p>
                </div>

                <div className="col">
                  <p className="text-right">
                    {" "}
                    <strong>
                      {" "}
                      <i className="fas fa-rupee-sign"></i>80{" "}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
