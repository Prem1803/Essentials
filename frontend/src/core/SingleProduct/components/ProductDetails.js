import React, { useEffect, useState } from "react";
import { FetchImage } from "../../../api/APICore";
import CoverLoader from "../../Components/CoverLoader";

const ProductDetails = ({ product }) => {
  const [images, setImages] = useState([]);
  const [stars, setStars] = useState([]);
  const [emptyStars, setEmptyStars] = useState([0, 1, 2, 3, 4]);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
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
          for (const eachimage of product.images) {
            var data = await FetchImage(eachimage);
            setImages((pre) => [...pre, data]);
          }
        };
        SetTheFetchedImage();
      }
    }
  }, [product]);
  useEffect(() => {
    console.log(images);
  }, [images]);
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="detail_left">
          <div className="zoom-in">
            {images.length < 1 ? (
              <CoverLoader image={true} />
            ) : (
              <img
                src={URL.createObjectURL(images[currentImage])}
                className="product-img-fluid"
                alt="Product"
              />
            )}
          </div>

          <ul className="list-inline small_products">
            {/* <li className="list-inline-item">
              <div className="img-product">
                {images.length < 2 ? (
                  <CoverLoader immage={true} />
                ) : (
                  <img src={URL.createObjectURL(images[1])} alt="Product" />
                )}
              </div>
            </li> */}
            {images.map((image, index) => {
              if (index !== currentImage) {
                return (
                  <li className="list-inline-item">
                    <div
                      className="img-product"
                      onClick={() => {
                        setCurrentImage(index);
                      }}
                    >
                      <img src={URL.createObjectURL(image)} alt="Product" />
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      <div className="col-md-8">
        <div className="detail_right">
          <h1>{product && product.name}</h1>

          <ul className="list-inline rating">
            {stars.map((index) => {
              return (
                <li className="list-inline-item">
                  <i className="fa fa-star" key={index}></i>
                </li>
              );
            })}
            {emptyStars.map((index) => {
              return (
                <li className="list-inline-item">
                  <i className="far fa-star" key={index}></i>
                </li>
              );
            })}
          </ul>

          <p>{product && product.description}</p>

          <hr />

          <h2>Product Features</h2>

          <ul className="features">
            {product &&
              product.features &&
              product.features.map((feature, index) => {
                return <li key={index}>{feature}</li>;
              })}
          </ul>

          <hr className="mb-4" />

          <div className="d-inline-flex align-items-center w-100">
            <div className="price">
              {" "}
              <i className="fas fa-rupee-sign"></i> {product && product.amount}
            </div>

            <div className="input-group qty_weight">
              <label>
                {" "}
                Qty weight <span>(In {product && product.quantityType}) </span>:
              </label>

              <span className="d-flex border">
                <span className="input-group-btn minus">
                  <button
                    type="button"
                    className="btn btn-default btn-number"
                    onClick={(e) => {
                      if (quantity > 1) setQuantity(quantity - 1);
                    }}
                  >
                    <span className="fa fa-minus"></span>
                  </button>
                </span>

                <input
                  type="number"
                  className="form-control input-number"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(e.target.value)}
                  max="10"
                />

                <span className="input-group-btn plus">
                  <button
                    type="button"
                    className="btn btn-default btn-number"
                    onClick={(e) => {
                      if (quantity < 10) setQuantity(quantity + 1);
                    }}
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
