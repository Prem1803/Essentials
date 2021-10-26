import React from "react";

const CategoryHeader = ({ search, setSearch }) => {
  return (
    <div className="row">
      <div className="col-12 col-xl-9 col-lg-8 col-md-8 col-sm-12">
        <div className="grid-top">
          <div className="row">
            <div className="col-12 col-xl-9 col-lg-8 col-md-6 col-sm-12">
              <h1 className="heading1">
                {search ? "Your Search Result Here" : "Dairy & Bakery"}
              </h1>
              <p>Showing result 1-22 of 22 result</p>
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
              <select className="form-control">
                <option value="0">Short by latest</option>
                <option value="1">10</option>
                <option value="2">25</option>
                <option value="3">50</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
