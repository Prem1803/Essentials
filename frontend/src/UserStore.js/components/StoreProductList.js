import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUserProducts } from "../../actions/ProductActions";
import CoverLoader from "../../core/Components/CoverLoader";
import store from "../../store";
import EditProduct from "./EditProduct";
import ProductListItem from "./ProductListItem";

const StoreProductList = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const incrementPage = () => {
    if (Number(page) * Number(10) < Number(total)) {
      setPage(page + 1);
      setLoading(true);
    }
  };
  const decrementPage = () => {
    if (Number(page) > 1) {
      setPage(page - 1);
      setLoading(true);
    }
  };

  let userProducts = store.getState().userProducts;
  store.subscribe(() => {
    userProducts = store.getState().userProducts;
    if (userProducts.products) {
      setProducts(userProducts.products);
    }
    if (userProducts.total) {
      setTotal(userProducts.total);
    }
    if (userProducts.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });
  useEffect(() => {
    dispatch(getAllUserProducts({ search, page }));
  }, [search, page]);
  return (
    <div className="card">
      {" "}
      {product ? (
        <EditProduct setProduct={setProduct} productDetails={product} />
      ) : (
        <>
          <div className="row">
            <div className="col-12 col-xl-8 col-lg-8 col-md-12 col-sm-12 mt-3 ml-3 mb-3">
              <div className="search_form">
                <input
                  type="search"
                  name="search"
                  className="form-control"
                  placeholder="Search Product"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <span className="input-icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-3 ml-3 mb-3">
              <div
                className="search_form btn-primary btn"
                onClick={() => {
                  setProduct({});
                }}
              >
                Add Product
              </div>
            </div>
          </div>
          <div className="card-header">
            {" "}
            <h3 className="card-title">All Products</h3>{" "}
          </div>{" "}
          <div className="user-table">
            {" "}
            <div className="table-responsive ">
              {" "}
              <table className="table card-table  table-hover table-vcenter text-nowrap ">
                {" "}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Total Quantity</th>
                    <th>Quantities Left</th>
                    <th>Amount</th>
                    <th>Settings</th>
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  {loading ? (
                    <CoverLoader />
                  ) : (
                    products.map((userproduct, index) => {
                      return (
                        <ProductListItem
                          setProduct={setProduct}
                          product={userproduct}
                          key={index}
                        />
                      );
                    })
                  )}
                </tbody>
              </table>{" "}
            </div>
          </div>{" "}
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
        </>
      )}
    </div>
  );
};

export default StoreProductList;
