import React, { useState } from "react";
import OrderDetails from "./OrderDetails";
import SingleOrder from "./SingleOrder";

const OrderList = () => {
  const [showOrder, setShowOrder] = useState(false);
  useState(() => {
    console.log("Show Order ", showOrder);
  }, [showOrder]);
  return (
    <div className="tab-pane fade show active">
      {showOrder ? (
        <OrderDetails setShowOrder={setShowOrder} />
      ) : (
        <>
          <h2>My Order List</h2>

          <div className="order-setting">
            <div className="order-main">
              <SingleOrder setShowOrder={setShowOrder} />
            </div>
          </div>

          <ul className="pagination">
            <li className="page-item active">
              <button className="page-link">1</button>
            </li>

            <li className="page-item">
              <button className="page-link">
                2 <span className="sr-only">(current)</span>
              </button>
            </li>

            <li className="page-item">
              <button className="page-link">
                <i className="fa fa-angle-right"></i>
              </button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default OrderList;
