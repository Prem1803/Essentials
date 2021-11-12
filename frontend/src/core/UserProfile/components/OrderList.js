import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getOrders } from "../../../actions/OrderActions";
import store from "../../../store";
import CoverLoader from "../../Components/CoverLoader";
import OrderDetails from "./OrderDetails";
import SingleOrder from "./SingleOrder";

const OrderList = () => {
  const [showOrder, setShowOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  let orderList = store.getState().orderList;
  store.subscribe(() => {
    orderList = store.getState().orderList;
    if (orderList.orders) {
      setOrders(orderList.orders);
    }
    if (orderList.total) {
      setTotal(orderList.total);
    }
    if (orderList.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders({ page }));
  }, []);
  const incrementPage = () => {
    if (Number(page) * Number(20) < Number(total)) {
      setPage(page + 1);
    }
  };
  const decrementPage = () => {
    if (Number(page) > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="tab-pane fade show active">
      {showOrder ? (
        <OrderDetails
          setShowOrder={setShowOrder}
          selectedOrder={selectedOrder}
        />
      ) : (
        <>
          <h2>My Order List</h2>

          <div className="order-setting">
            <div className="order-main">
              {loading ? (
                <CoverLoader />
              ) : (
                orders.map((order, index) => {
                  return (
                    <SingleOrder
                      setShowOrder={setShowOrder}
                      setSelectedOrder={setSelectedOrder}
                      key={index}
                      order={order}
                    />
                  );
                })
              )}
            </div>
          </div>

          <ul className="pagination">
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
        </>
      )}
    </div>
  );
};

export default OrderList;
