import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../actions/CartActions";
import { FetchImage } from "../../../api/APICore";
import CoverLoader from "../../Components/CoverLoader";

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [stars, setStars] = useState([]);
  const [emptyStars, setEmptyStars] = useState([0, 1, 2, 3, 4]);
  const [ImageData, setImageData] = useState("");
  const [fetchingImage, setFetchingImage] = useState(false);
  useEffect(() => {
    if (product && product.ratingCount && product.totalReviews) {
      const { ratingCount, totalReviews } = product;
      const rating = Number(ratingCount) / Number(totalReviews);
      let starsArray = [];
      let emptystarsArray = [];
      for (var i = 0; i < rating; i++) starsArray.push(i);
      for (i = 4; i > rating; i--) {
        emptystarsArray.push(i);
      }
      setStars(starsArray);
      setEmptyStars(emptystarsArray);
    }
    if (product && product.images) {
      if (product.images.length > 0) {
        const SetTheFetchedImage = async () => {
          setFetchingImage(true);
          var data = await FetchImage(product.images[0]);

          setImageData(data);
          setFetchingImage(false);
        };
        SetTheFetchedImage();
      }
    }
  }, [product]);
  const addProductToCart = () => {
    if (product) {
      let products = [{ _id: product._id, quantity: 1 }];
      dispatch(addToCart({ products }));
    }
  };
  return (
    <div className="product-layout product-grid col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="product-holder product-thumb">
        <div className="image">
          <Link to={product ? `/product/${product._id}` : ""}>
            <div className="img-product">
              {fetchingImage ? (
                <CoverLoader image={true} />
              ) : (
                <img
                  src={ImageData && URL.createObjectURL(ImageData)}
                  className="product-img-fluid"
                  alt="Product"
                />
              )}
            </div>
          </Link>
        </div>
        <div className="p-content caption">
          <div className="p-cate"> {product && product.tags.join(", ")}</div>
          <div className="p-title">
            {" "}
            <Link to={product ? `/product/${product._id}` : ""}>
              {product && product.name}{" "}
            </Link>
          </div>
          <div className="p-title">
            Sold by:
            <span className="seller-name">
              <Link to="/store">General store</Link>
            </span>
          </div>
          <div className="p-price">
            <i className="fas fa-rupee-sign"></i>
            {product && product.amount}{" "}
            <span className="pull-right">
              {" "}
              {stars.map((index) => {
                return <i className="fas fa-star" key={index}></i>;
              })}
              {emptyStars.map((index) => {
                return <i className="far fa-star" key={index}></i>;
              })}
            </span>
          </div>
          <div className="p-buttonarea">
            <button
              className="btn btn-pcart"
              onClick={() => {
                addProductToCart();
              }}
            >
              Add To Cart <i className="far fa-shopping-cart"></i>
            </button>
            <span className="pull-right">
              <button className="btn btn-wish">
                <i className="far fa-heart"> </i>{" "}
              </button>{" "}
              <button className="btn btn-wish">
                <Link to={product ? `/product/${product._id}` : ""}>
                  <i className="fas fa-eye"></i>
                </Link>
              </button>
            </span>
          </div>
        </div>
        {product && product.onSale && <div className="salebutton"> Sale</div>}
      </div>
    </div>
  );
};

export default SingleProduct;
