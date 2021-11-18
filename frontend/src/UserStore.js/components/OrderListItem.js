import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateStoreOrder } from "../../actions/OrderActions";

const OrderListItem = ({ order }) => {
  const dispatch = useDispatch();
  const updateOrder = () => {
    dispatch(updateStoreOrder({ orderId: order._id }));
  };
  return (
    <tr>
      <td className="font-weight-semibold">
        {order &&
          order.user &&
          `${order.user.firstName} ${order.user.lastName}`}
      </td>

      <td>
        <Link to={order && order.product ? `/product/${order.product.id}` : ""}>
          {order && order.product && order.product.name}
        </Link>
      </td>
      <td className="font-weight-semibold">{order && order.quantity}</td>
      <td className="font-weight-semibold">
        <i className="fa fa-rupee-sign"></i>{" "}
        {order && Number(order.quantity) * Number(order.amount)}
      </td>
      <td className="font-weight-semibold">
        <p>
          {order &&
            order.user &&
            order.user.address &&
            order.user.address.houseNumber}
        </p>
        <p>
          {order && order.user && order.user.address && order.user.address.area}
        </p>
        <p>
          {order && order.user && order.user.address && order.user.address.city}
          ,{" "}
          {order &&
            order.user &&
            order.user.address &&
            order.user.address.state}
        </p>
        <p>
          <i className="fa fa-phone "></i>{" "}
          {order && order.user && order.user.mobileNumber}
        </p>
      </td>
      <td>
        {" "}
        <div className="btn-group">
          {" "}
          {order && order.status === "Placed" ? (
            <>
              <button className="btn btn-sm btn-orange mr-3">Pending</button>
              <button className="btn " onClick={updateOrder}>
                <i className="far fa-check-square "></i>
              </button>
            </>
          ) : (
            <button className="btn btn-sm btn-success ">Completed</button>
          )}
        </div>{" "}
      </td>
    </tr>
  );
};

export default OrderListItem;
