import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../actions/CartActions";
import { FetchImage } from "../../../api/APICore";
import CoverLoader from "../../Components/CoverLoader";

const SingleOrder = ({ setShowOrder, setSelectedOrder, order }) => {
  const [product, setProduct] = useState({});
  const [ImageData, setImageData] = useState("");
  const [fetchingImage, setFetchingImage] = useState(false);

  useEffect(() => {
    if (product && product.images) {
      const SetTheFetchedImage = async () => {
        setFetchingImage(true);
        var data = await FetchImage(product.images[0]);

        setImageData(data);
        setFetchingImage(false);
      };
      SetTheFetchedImage();
    }
  }, [product]);
  useEffect(() => {
    if (order && order.product) {
      setProduct(order.product);
    }
  }, [order]);
  useEffect(() => {
    if (order && order.product) {
      setProduct(order.product);
    }
  }, []);
  const dispatch = useDispatch();
  const addProductToCart = () => {
    if (product) {
      let products = [{ _id: product._id, quantity: 1 }];
      dispatch(addToCart({ products }));
    }
  };
  return (
    <div className="order-list btm-border">
      <ul className="order-img pt-0">
        <li className="img-product">
          {fetchingImage ? (
            <CoverLoader image={true} />
          ) : (
            <img
              src={ImageData && URL.createObjectURL(ImageData)}
              className="product-img-fluid"
              alt="Product"
            />
          )}
        </li>
        <li className="right-order">
          {order && order.delivered && (
            <p>
              {" "}
              <i className="fa fa-circle" aria-hidden="true"></i>
              <strong>
                {" "}
                Delivery date{" "}
                {new Date(order.deliveryDateAndTime).toDateString()} -{" "}
                {new Date(order.deliveryDateAndTime).toLocaleTimeString()}
              </strong>
            </p>
          )}

          <p> Your order has {order && order.status} </p>

          <button
            className="btn order-review"
            onClick={() => {
              setShowOrder(true);
              setSelectedOrder({ ...order, ImageData });
            }}
          >
            <i className="fa fa-star" aria-hidden="true"></i> Rate & Review
          </button>
          <button className="btn order-review" onClick={addProductToCart}>
            <i className="fas fa-shopping-bag"></i> Order Again
          </button>
        </li>
        <li>
          <p>
            {" "}
            <Link to={product ? `/product/${product._id}` : ""}>
              <strong>{product && product.name}</strong>
            </Link>
          </p>

          <p> {product && product.description} </p>

          <p> Delivered by supermarket</p>

          <p>
            {" "}
            Price:- <i className="fas fa-rupee-sign"></i>{" "}
            {order && order.amount}{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SingleOrder;
