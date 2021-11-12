import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getSingleProduct } from "../../actions/ProductActions";
import store from "../../store";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ProductReviews from "./components/ProductReviews";
import CoverLoader from "../Components/CoverLoader";

const SingleProduct = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  let product = store.getState().product;
  store.subscribe(() => {
    product = store.getState().product;
    if (product.product) {
      setProductDetails(product.product);
      if (product.product.reviews) {
        setReviews(product.product.reviews);
      }
    }

    if (product.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });
  useEffect(() => {
    if (productId) dispatch(getSingleProduct({ productId: productId }));
  }, []);
  return (
    <div className="essential-product-detail">
      <Navbar level={1} />
      <div className="product_details">
        <div className="container">
          {loading ? (
            <CoverLoader />
          ) : (
            <ProductDetails product={productDetails} />
          )}
          {!loading && <ProductReviews reviews={reviews} />}
        </div>
      </div>
      <Footer level={1} />
    </div>
  );
};

export default SingleProduct;
