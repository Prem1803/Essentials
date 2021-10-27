import React from "react";

const ProductDetails = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="detail_left">
          <div className="zoom-in">
            <img src="../img/cart-details/milk.png" alt="Product Image" />
          </div>

          <ul className="list-inline small_products">
            <li className="list-inline-item">
              <div className="img-product">
                <img src="../img/cart-details/milk.png" alt="Product Image" />
              </div>
            </li>
            <li className="list-inline-item">
              <div className="img-product">
                <img src="../img/cart-details/milk.png" alt="Product Image" />
              </div>
            </li>
            <li className="list-inline-item">
              <div className="img-product">
                <img src="../img/cart-details/milk.png" alt="Product Image" />
              </div>
            </li>

            <li className="list-inline-item">
              <div className="img-product">
                <img src="../img/cart-details/milk.png" alt="Product Image" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-8">
        <div className="detail_right">
          <h1>Fresh Cow Milk</h1>

          <ul className="list-inline rating">
            <li className="list-inline-item">
              <i className="fa fa-star" aria-hidden="true"></i>
            </li>

            <li className="list-inline-item">
              <i className="fa fa-star" aria-hidden="true"></i>
            </li>

            <li className="list-inline-item">
              <i className="fa fa-star" aria-hidden="true"></i>
            </li>

            <li className="list-inline-item">
              <i className="fa fa-star" aria-hidden="true"></i>
            </li>

            <li className="list-inline-item">
              <i className="fa fa-star" aria-hidden="true"></i>
            </li>
          </ul>

          <p>Fresh cow milk. Highly creamy and tasty.</p>

          <hr />

          <h2>Product Features</h2>

          <ul className="features">
            <li>100% Fresh no Chemicals</li>

            <li>100% Fresh Milk from Cow</li>
          </ul>

          <hr className="mb-4" />

          <div className="d-inline-flex align-items-center w-100">
            <div className="price">
              {" "}
              <i className="fas fa-rupee-sign"></i> 55.00
            </div>

            <div className="input-group qty_weight">
              <label>
                {" "}
                Qty weight <span>(In kg) </span>:
              </label>

              <span className="d-flex border">
                <span className="input-group-btn minus">
                  <button
                    type="button"
                    className="btn btn-default btn-number"
                    disabled="disabled"
                    data-type="minus"
                    data-field="quant[1]"
                  >
                    <span className="fa fa-minus"></span>
                  </button>
                </span>

                <input
                  type="number"
                  name="quant[1]"
                  className="form-control input-number"
                  value="1"
                  min="1"
                  max="10"
                />

                <span className="input-group-btn plus">
                  <button
                    type="button"
                    className="btn btn-default btn-number"
                    data-type="plus"
                    data-field="quant[1]"
                  >
                    <span className="fa fa-plus"></span>
                  </button>
                </span>
              </span>
            </div>
          </div>

          <hr className="mt-4" />

          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 my-auto">
              <div className="btn-area">
                <button className="btn btn-pcart">
                  {" "}
                  Add To Cart <i className="far fa-shopping-cart"></i>
                </button>

                <span className="pull-right">
                  <div className="btn-wish">
                    <i className="far fa-heart"> </i>{" "}
                  </div>{" "}
                  <div className="btn-wish">
                    <i className="fas fa-eye"></i>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
