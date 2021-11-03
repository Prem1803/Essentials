import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FetchImage } from "../../../api/APICore";
import CoverLoader from "../../Components/CoverLoader";

const SingleItem = ({ product }) => {
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
  useEffect(() => {
    console.log(ImageData);
  }, [ImageData]);

  return (
    <div className="item ">
      <div className="product-holder">
        <Link to={product ? `/product/${product._id}` : ""}>
          <div className="img-product">
            {fetchingImage ? (
              <CoverLoader image={true} />
            ) : (
              <img
                src={ImageData && URL.createObjectURL(ImageData)}
                className="img-fluid"
                alt="Product"
              />
            )}
          </div>
        </Link>
        <div className="p-content">
          <div className="p-cate"> {product && product.tags.join(", ")}</div>
          <div className="p-title">
            {" "}
            <span className="product-name">
              <Link to={product ? `/product/${product._id}` : ""}>
                {product && product.name}{" "}
              </Link>
            </span>
            <span className="seller-details">
              Sold by:
              <span className="seller-name">
                <Link to="/store">General store</Link>
              </span>
            </span>
          </div>
          <div className="p-price">
            <i className="fas fa-rupee-sign"></i> {product && product.amount}{" "}
            <span>
              {" "}
              {stars.map((index) => {
                return <i className="fas fa-star" key={index}></i>;
              })}
              {emptyStars.map((index) => {
                return <i className="far fa-star" key={index}></i>;
              })}
              {/* <i className="fas fa-star"></i> <i className="far fa-star"></i>{" "}
              <i className="far fa-star"></i> <i className="far fa-star"></i>{" "}
              <i className="far fa-star"></i> */}
            </span>
          </div>
          <div className="p-buttonarea">
            <div className="btn btn-pcart">
              {" "}
              Add To Cart <i className="far fa-shopping-cart"></i>
            </div>
            <span className="pull-right">
              <div className="btn-wish">
                <i className="far fa-heart"> </i>{" "}
              </div>{" "}
              <div className="btn-wish">
                <Link to={product ? `/product/${product._id}` : ""}>
                  <i className="fas fa-eye"></i>
                </Link>
              </div>
            </span>
          </div>
        </div>
        {product && product.onSale && <div className="salebutton"> Sale</div>}
      </div>
    </div>
  );
};

export default SingleItem;
