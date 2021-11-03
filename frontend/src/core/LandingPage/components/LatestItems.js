import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRecentProducts } from "../../../actions/ProductActions";
import store from "../../../store";
import CoverLoader from "../../Components/CoverLoader";

import SingleItem from "./SingleItem";

const LatestItems = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  let recentProducts = store.getState().recentProducts;
  store.subscribe(() => {
    recentProducts = store.getState().recentProducts;
    if (recentProducts.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (recentProducts.products) {
      setProducts(recentProducts.products);
    }
  });
  useEffect(() => {
    dispatch(getRecentProducts());
  }, []);
  return (
    <div className="product-areaholder">
      <div className="container">
        <div className="row">
          <h2 className="text-left product-heading">
            {" "}
            Latest Arrived Grocery Item{" "}
          </h2>
        </div>
        <div className="row">
          <div className="items-on-sale">
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

export default LatestItems;
