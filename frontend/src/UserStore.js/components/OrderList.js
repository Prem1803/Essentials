import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getStoreOrders } from "../../actions/OrderActions";
import CoverLoader from "../../core/Components/CoverLoader";
import store from "../../store";
import OrderListItem from "./OrderListItem";

const OrderList = ({ orderStatus }) => {
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(orderStatus);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const incrementPage = () => {
    if (Number(page) * Number(10) < Number(total)) {
      setPage(page + 1);
    }
  };
  const decrementPage = () => {
    if (Number(page) > 1) {
      setPage(page - 1);
    }
  };
  let storeOrders = store.getState().storeOrders;
  store.subscribe(() => {
    storeOrders = store.getState().storeOrders;
    if (storeOrders.orders) {
      setOrders(storeOrders.orders);
    }
    if (storeOrders.total) {
      setTotal(storeOrders.total);
    }
    if (storeOrders.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoreOrders({ status, page }));
  }, [status, page]);
  useEffect(() => {
    setStatus(orderStatus);
  }, [orderStatus]);
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
                  <select
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="Placed">Pending</option>
                    <option value="Delivered">Completed</option>
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
              {loading ? (
                <CoverLoader />
              ) : (
                orders.map((order, index) => {
                  return <OrderListItem order={order} key={index} />;
                })
              )}
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
