import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CategoryHeader from "./components/CategoryHeader";
import CategoryListSidebar from "./components/CategoryListSidebar";
import SingleProduct from "./components/SingleProduct";
import {
  getAllProducts,
  resetProductListError,
} from "../../actions/ProductActions";
import store from "../../store";
import CoverLoader from "../Components/CoverLoader";
import { toast } from "react-toastify";
const CategoryWiseProducts = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  let products = store.getState().products;
  store.subscribe(() => {
    products = store.getState().products;
    if (products.error) {
      toast.error(products.error, {
        toastId: "Product-List-Error",
      });
      dispatch(resetProductListError());
    }
    if (products.products) {
      setCategoryProducts(products.products);
    }
    if (products.total) {
      setTotal(products.total);
    }
    if (products.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });
  useEffect(() => {
    dispatch(getAllProducts({ categoryId: category, limit, search, page }));
  }, [category, limit, search, page]);

  const incrementPage = () => {
    if (Number(page) * Number(limit) < Number(total)) {
      setPage(page + 1);
    }
  };
  const decrementPage = () => {
    if (Number(page) > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="essential-category">
      <Navbar level={1} />
      <div className="category-section1">
        <div className="container">
          <div id="category-filter">
            <CategoryHeader
              category={category}
              setSearch={setSearch}
              setLimit={setLimit}
              total={total}
              limit={limit}
              page={page}
            />
            <div className="row">
              <div className="col-12 col-xl-9 col-lg-8 col-md-8 col-sm-12">
                <div className="row filter-products">
                  {loading ? (
                    <CoverLoader />
                  ) : (
                    categoryProducts.map((product, index) => {
                      return <SingleProduct product={product} key={index} />;
                    })
                  )}
                </div>

                <ul className="pagination product-pagination">
                  <li className="page-item" onClick={decrementPage}>
                    <button className="page-link">
                      <i className="fa fa-angle-left"></i>
                    </button>
                  </li>
                  <li className="page-item active">
                    <button className="page-link">{page}</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link" onClick={incrementPage}>
                      <i className="fa fa-angle-right"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <CategoryListSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer level={1} />
    </div>
  );
};

export default CategoryWiseProducts;
