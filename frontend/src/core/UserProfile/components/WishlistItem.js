import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../../../actions/WishlistActions";
import { FetchImage } from "../../../api/APICore";
import CoverLoader from "../../Components/CoverLoader";
const WishlistItem = ({ product }) => {
  const dispatch = useDispatch();
  const removeProductFromWishlist = () => {
    if (product) dispatch(removeFromWishlist({ product: product._id }));
  };
  const [ImageData, setImageData] = useState("");
  const [fetchingImage, setFetchingImage] = useState(false);
  useEffect(() => {
    if (product && product.image) {
      const SetTheFetchedImage = async () => {
        setFetchingImage(true);
        var data = await FetchImage(product.image);

        setImageData(data);
        setFetchingImage(false);
      };
      SetTheFetchedImage();
    }
  }, [product]);
  return (
    <div className="order-main-top btm-border">
      <ul className="order-img pt-0">
        <li className="img-product">
          <Link to="/categories">
            {fetchingImage ? (
              <CoverLoader image={true} />
            ) : (
              <img
                src={ImageData && URL.createObjectURL(ImageData)}
                className="product-img-fluid"
                alt="Product"
              />
            )}
          </Link>
        </li>

        <li>
          <p>
            {" "}
            <strong>
              <Link to="/categories">{product && product.name}</Link>
            </strong>
          </p>

          <p> {product && product.description.slice(0, 50)}... </p>

          <p>
            {" "}
            Price:- <i className="fas fa-rupee-sign"></i>{" "}
            {product && product.amount}{" "}
          </p>
        </li>

        <li className="right-order">
          <button
            className="btn btn-del"
            onClick={() => {
              removeProductFromWishlist();
            }}
          >
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WishlistItem;
