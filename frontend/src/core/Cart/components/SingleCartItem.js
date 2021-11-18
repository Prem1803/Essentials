import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../../actions/CartActions";
import { FetchImage } from "../../../api/APICore";
import CoverLoader from "../../Components/CoverLoader";

const SingleCartItem = ({ cartItem, UpdateTotal }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [ImageData, setImageData] = useState("");
  const [fetchingImage, setFetchingImage] = useState(false);

  useEffect(() => {
    if (cartItem && cartItem.image) {
      const SetTheFetchedImage = async () => {
        setFetchingImage(true);
        var data = await FetchImage(cartItem.image);

        setImageData(data);
        setFetchingImage(false);
      };
      SetTheFetchedImage();
    }
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);
  const updateQuantity = (quantity) => {
    if (cartItem) {
      const products = [
        {
          _id: cartItem._id,
          quantity,
        },
      ];
      dispatch(addToCart({ products }));
      UpdateTotal();
    }
  };
  const removeItem = () => {
    if (cartItem) dispatch(removeFromCart({ product: cartItem._id }));
  };
  return (
    <tr>
      <td>
        <div className="media">
          <div className="img-product">
            {fetchingImage ? (
              <CoverLoader image={true} />
            ) : (
              <img
                src={ImageData && URL.createObjectURL(ImageData)}
                className="cart-product-img-fluid"
                alt={cartItem && cartItem.name}
              />
            )}
          </div>

          <div className="media-body">
            <h2>{cartItem && cartItem.name}</h2>

            <span>{cartItem && cartItem.description}</span>
          </div>
        </div>
      </td>

      <td>
        <i className="fas fa-rupee-sign"></i> {cartItem && cartItem.amount}
      </td>

      <td>
        <div className="input-group qty">
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-default btn-number bg-green"
              onClick={(e) => {
                if (quantity > 1) updateQuantity(quantity - 1);
              }}
            >
              <i className="fas fa-minus"></i>
            </button>
          </span>

          <input
            type="number"
            className="input-number"
            value={quantity}
            min="1"
            onChange={(e) => updateQuantity(e.target.value)}
            max="10"
          />

          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-default btn-number bg-green"
              onClick={(e) => {
                if (quantity < 10) updateQuantity(quantity + 1);
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
          </span>
        </div>
      </td>

      <td>
        <div className="tprice-del">
          <span className="total-p">
            <i className="fas fa-rupee-sign"></i>{" "}
            {cartItem && cartItem.amount * quantity}
          </span>

          <Link to="/my-cart" onClick={removeItem}>
            <i className="fas fa-trash"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default SingleCartItem;
