import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductListItem = ({ setProduct, product }) => {
  return (
    <tr>
      <td className="font-weight-semibold">{product && product.name}</td>

      <td>{product && product.category.title}</td>
      <td className="font-weight-semibold">{product && product.quantity}</td>
      <td className="font-weight-semibold">
        {product && product.quantitiesLeft}
      </td>
      <td className="font-weight-semibold">
        <i className="fa fa-rupee-sign"></i> {product && product.amount}
      </td>
      <td>
        {" "}
        <div className="btn-group">
          {" "}
          <Link
            to={product && product._id ? `/product/${product._id}` : ""}
            className="btn btn-sm btn-orange mr-3"
          >
            <i className="fa fa-eye" />
          </Link>
          <button
            className="btn btn-sm btn-primary mr-3"
            onClick={() => {
              setProduct(product);
            }}
          >
            <i className="fa fa-edit" />
          </button>
        </div>{" "}
      </td>
    </tr>
  );
};

export default ProductListItem;
