import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CategoryHeader from "./components/CategoryHeader";
import CategoryListSidebar from "./components/CategoryListSidebar";
import SingleProduct from "./components/SingleProduct";
const SearchWiseProducts = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="essential-category">
      <Navbar level={1} />
      <div className="category-section1">
        <div className="container">
          <div id="category-filter">
            <CategoryHeader search={true} setSearch={setSearch} />
            <div className="row">
              <div className="col-12 col-xl-9 col-lg-8 col-md-8 col-sm-12">
                <div className="row filter-products">
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                </div>

                <ul className="pagination">
                  <li className="page-item active">
                    <button className="page-link">1</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">
                      2 <span className="sr-only">(current)</span>
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">
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

export default SearchWiseProducts;
