import React, { useEffect, useState } from "react";
import store from "../../../store";

const CategoryHeader = ({
  category,
  search,
  setSearch,
  setLimit,
  total,
  limit,
  page,
}) => {
  let categories = store.getState().category;
  const [categoryTitle, setCategoryTitle] = useState("");
  useEffect(() => {
    if (categories.categories) {
      for (const eachCategory of categories.categories) {
        if (eachCategory._id === category) setCategoryTitle(eachCategory.title);
      }
    }
  }, [category]);
  store.subscribe(() => {
    categories = store.getState().category;
    if (categories.categories) {
      for (const eachCategory of categories.categories) {
        if (eachCategory._id === category) setCategoryTitle(eachCategory.title);
      }
    }
  });
  const [startProduct, setStartProduct] = useState("");
  const [endProduct, setEndProduct] = useState("");
  useEffect(() => {
    let start = Number(page - 1) * Number(limit) + 1;
    setStartProduct(start);
  }, []);
  useEffect(() => {
    let start = Number(page - 1) * Number(limit) + 1;
    setStartProduct(start);
  }, [page, limit, total]);
  useEffect(() => {
    let end = Number(startProduct) + Number(limit) - 1;
    if (total && end > Number(total)) setEndProduct(total);
    else setEndProduct(end);
  }, [startProduct, total, limit]);

  return (
    <div className="row">
      <div className="col-12 col-xl-9 col-lg-8 col-md-8 col-sm-12">
        <div className="grid-top">
          <div className="row">
            <div className="col-12 col-xl-9 col-lg-8 col-md-6 col-sm-12">
              <h1 className="heading1">
                {search ? "Your Search Result Here" : categoryTitle}
              </h1>
              <p>
                Showing result {startProduct}-{endProduct} of {total} result
              </p>
            </div>

            <div className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12">
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
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 category-sidebar">
        <div className="filter-group">
          <div className="filter-content list_inline">
            <span className="custom-dropdown">
              <select
                className="form-control"
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                }}
              >
                <option value="10">Short by latest</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
