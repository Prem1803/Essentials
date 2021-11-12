import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateReview } from "../../../actions/OrderActions";

const OrderDetails = ({ setShowOrder, selectedOrder }) => {
  const [review, setReview] = useState("");
  const [stars, setStars] = useState([]);
  const [emptyStars, setEmptyStars] = useState([0, 1, 2, 3, 4]);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    if (selectedOrder) {
      if (selectedOrder.review.length > 0) {
        let newRating = selectedOrder.review[0].rating;
        setReview(selectedOrder.review[0].review);
        setRating(newRating);
        let starsArray = [];
        let emptystarsArray = [];
        for (var i = 0; i < newRating; i++) starsArray.push(i);
        for (i = 5; i > newRating; i--) {
          emptystarsArray.push(i);
        }
        setStars(starsArray);
        setEmptyStars(emptystarsArray);
      }
    }
  }, [selectedOrder]);
  const IncreaseRating = (incr) => {
    let newRating = incr + 1;
    if (newRating > 5) newRating = 5;
    setRating(newRating);
    let starsArray = [];
    let emptystarsArray = [];
    for (var i = 0; i < newRating; i++) starsArray.push(i);
    for (i = 5; i > newRating; i--) {
      emptystarsArray.push(i);
    }
    setStars(starsArray);
    setEmptyStars(emptystarsArray);
  };
  const DecreaseRating = (decr) => {
    let newRating = decr + 1;

    setRating(newRating);
    let starsArray = [];
    let emptystarsArray = [];
    for (var i = 0; i < newRating; i++) starsArray.push(i);
    for (i = 5; i > newRating; i--) {
      emptystarsArray.push(i);
    }
    setStars(starsArray);
    setEmptyStars(emptystarsArray);
  };
  const dispatch = useDispatch();
  const updateOrderReview = () => {
    let reviewId;
    if (selectedOrder.review.length > 0) reviewId = selectedOrder.review[0]._id;
    dispatch(
      updateReview({
        rating,
        review,
        order: selectedOrder._id,
        product: selectedOrder.product._id,
        reviewId,
      })
    );
  };
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
          {selectedOrder.delivered && (
            <div className="order-heading pt-0">
              Delivery Time{" "}
              {new Date(selectedOrder.deliveryDateAndTime).toDateString()} -{" "}
              {new Date(selectedOrder.deliveryDateAndTime).toLocaleTimeString()}
            </div>
          )}
        </div>

        <div className="order-main">
          <div className="order-list btm-border">
            <ul className="order-img">
              <li className="img-product">
                <img
                  src={
                    selectedOrder.ImageData &&
                    URL.createObjectURL(selectedOrder.ImageData)
                  }
                  className="product-img-fluid"
                  alt="Product"
                />
              </li>

              <li>
                <p>
                  {" "}
                  <Link
                    to={
                      selectedOrder && selectedOrder.product
                        ? `/product/${selectedOrder.product._id}`
                        : ""
                    }
                  >
                    <strong>
                      {selectedOrder &&
                        selectedOrder.product &&
                        selectedOrder.product.name}
                    </strong>
                  </Link>
                </p>

                <p>
                  {" "}
                  {selectedOrder &&
                    selectedOrder.product &&
                    selectedOrder.product.description}{" "}
                </p>

                <p> Delivered by supermarket</p>

                <p>
                  {" "}
                  Price:- <i className="fas fa-rupee-sign"></i>
                  {selectedOrder && selectedOrder.amount}{" "}
                </p>
              </li>
            </ul>
          </div>

          <div className="order-list btm-border">
            <div className="total-order">
              <div className="row mb-3">
                <div className="col">
                  <p>Sub Total</p>
                </div>

                <div className="col">
                  <p className="text-right">
                    {" "}
                    <i className="fas fa-rupee-sign"></i>
                    {selectedOrder &&
                      Number(selectedOrder.amount) *
                        Number(selectedOrder.quantity)}
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
                    <i className="fas fa-rupee-sign"></i>
                    {selectedOrder &&
                      Number(
                        Number(selectedOrder.amount) *
                          Number(selectedOrder.quantity) *
                          0.15
                      ).toFixed(2)}
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
                      <i className="fas fa-rupee-sign"></i>
                      {selectedOrder &&
                        Number(
                          Number(selectedOrder.amount) *
                            Number(selectedOrder.quantity) *
                            1.15
                        ).toFixed(2)}{" "}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-list">
            <div className="mb-3 mt-3">
              <p>
                <strong> Rate the product </strong>
              </p>
            </div>
            <div className="mb-3">
              {stars.map((index) => {
                return (
                  <i
                    className="fas fa-star"
                    key={index}
                    onClick={(e) => {
                      DecreaseRating(index);
                    }}
                  ></i>
                );
              })}
              {emptyStars.map((index) => {
                return (
                  <i
                    className="far fa-star"
                    key={index}
                    onClick={(e) => {
                      IncreaseRating(index);
                    }}
                  ></i>
                );
              })}
            </div>
            <textarea
              rows="3"
              className="form-control mb-3"
              placeholder="Enter a review"
              onChange={(e) => setReview(e.target.value)}
              value={review}
            ></textarea>
            <div className="p-buttonarea ">
              <button className="btn btn-pcart" onClick={updateOrderReview}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
