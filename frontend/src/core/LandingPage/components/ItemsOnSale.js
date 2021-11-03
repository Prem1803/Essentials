import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPopularProducts } from "../../../actions/ProductActions";
import store from "../../../store";
import CoverLoader from "../../Components/CoverLoader";
import SingleItem from "./SingleItem";

const ItemsOnSale = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  let popularProducts = store.getState().popularProducts;
  store.subscribe(() => {
    popularProducts = store.getState().popularProducts;
    if (popularProducts.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (popularProducts.products) {
      setProducts(popularProducts.products);
    }
  });
  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);
  return (
    <div className="product-areaholder">
      <div className="container">
        <div className="row">
          <h2 className="text-left product-heading">
            {" "}
            Featured/Popular Grocery Item{" "}
          </h2>
        </div>
        <div className="row">
          <div className="items-on-sale ">
            {loading ? (
              <CoverLoader />
            ) : (
              products.map((product, index) => {
                return <SingleItem product={product} key={index} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsOnSale;
