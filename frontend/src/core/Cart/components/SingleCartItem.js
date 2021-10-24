import React from "react";
import { Link } from "react-router-dom";

const SingleCartItem = () => {
  return (
    <tr>
      <td>
        <div className="media">
          <div className="img-product">
            <img src="img/cart-details/milk.png" alt="Milk" />
          </div>

          <div className="media-body">
            <h2>Milk</h2>

            <span>Fresh Tooned Milk of Cow</span>
          </div>
        </div>
      </td>

      <td>
        <i className="fas fa-rupee-sign"></i> 70.00
      </td>

      <td>
        <div className="input-group qty">
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-default btn-number bg-green"
              disabled="disabled"
              data-type="minus"
              data-field="quant[3]"
            >
              <i class="fas fa-minus"></i>
            </button>
          </span>

          <input
            type="number"
            name="quant[3]"
            className="input-number"
            value="1"
            min="1"
            max="10"
          />

          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-default btn-number bg-green"
              data-type="plus"
              data-field="quant[3]"
            >
              <i class="fas fa-plus"></i>
            </button>
          </span>
        </div>
      </td>

      <td>
        <div className="tprice-del">
          <span className="total-p">
            <i className="fas fa-rupee-sign"></i> 70.00
          </span>

          <Link to="/">
            <i class="fas fa-trash"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default SingleCartItem;
