import React, { useState } from "react";

const OrderListItem = () => {
  return (
    <tr>
      <td className="font-weight-semibold">Prem Kumar</td>

      <td>Milk</td>
      <td className="font-weight-semibold">5</td>
      <td className="font-weight-semibold">
        <i className="fa fa-rupee-sign"></i> 400
      </td>
      <td className="font-weight-semibold">
        <p>Plot No 489</p>
        <p>Prem Nagar , Nandri</p>
        <p>Jodhpur, Rajasthan</p>
      </td>
      <td>
        {" "}
        <div className="btn-group">
          {" "}
          <button className="btn btn-sm btn-success ">Completed</button>
          <button className="btn ">
            <i className="far fa-check-square "></i>
          </button>
          {/* <button className="btn btn-sm btn-orange mr-3">Pending</button> */}
        </div>{" "}
      </td>
    </tr>
  );
};

export default OrderListItem;
