import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../../store";

const CategoryListSidebar = () => {
  let categories = store.getState().category;
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (categories.categories) {
      setCategory(categories.categories);
    }
  }, []);
  store.subscribe(() => {
    categories = store.getState().category;
    if (categories.categories) {
      setCategory(categories.categories);
    }
  });

  return (
    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 category-sidebar">
      <div class="filter-group">
        <h3 class="title">Categories</h3>
        <div class="filter-content">
          <ul class="list-menu">
            {category &&
              category.map((eachCategory, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={eachCategory ? `/categories/${eachCategory._id}` : ""}
                    >
                      {eachCategory && eachCategory.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryListSidebar;
