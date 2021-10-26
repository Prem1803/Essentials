import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryListSidebar = () => {
  return (
    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 category-sidebar">
      <div class="filter-group">
        <h3 class="title">Categories</h3>
        <div class="filter-content">
          <ul class="list-menu">
            <li>
              <Link to="/categories/dairy">
                Dairy & bakery <span>3</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryListSidebar;
