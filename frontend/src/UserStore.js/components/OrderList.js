import React, { useState } from "react";
import OrderListItem from "./OrderListItem";

const OrderList = () => {
  const [page, setPage] = useState(1);
  const incrementPage = () => {
    if (Number(page) * Number(10) < Number(100)) {
      setPage(page + 1);
    }
  };
  const decrementPage = () => {
    if (Number(page) > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="card">
      {" "}
      <div className="card-header">
        {" "}
        <h3 className="card-title">
          All Orders{" "}
          <div className="order_settingright float-right">
            <div className="ui equal width form">
              <div className="field ">
                <span className="custom-dropdown">
                  <select name="status">
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
        </h3>{" "}
      </div>{" "}
      <div className="user-table">
        {" "}
        <div className="table-responsive ">
          {" "}
          <table className="table card-table  table-hover table-vcenter text-nowrap ">
            {" "}
            <thead>
              <tr>
                <th>User</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total Amount</th>
                <th>Address</th>
                <th>Delivery</th>
              </tr>{" "}
            </thead>{" "}
            <tbody>
              <OrderListItem />
              <OrderListItem />
              <OrderListItem />
              <OrderListItem />
              <OrderListItem />
              <OrderListItem />
              <OrderListItem />
              <OrderListItem />
              <OrderListItem />
              <OrderListItem />
            </tbody>
          </table>{" "}
        </div>{" "}
      </div>{" "}
      <ul className="pagination product-pagination">
        <li className="page-item" onClick={decrementPage}>
          <button className="page-link">
            <i className="fa fa-angle-left"></i>
          </button>
        </li>
        <li className="page-item active">
          <button className="page-link">{page}</button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={incrementPage}>
            <i className="fa fa-angle-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default OrderList;
