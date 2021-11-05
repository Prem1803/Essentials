import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../../actions/CategoryActions";
import store from "../../../store";
import SingleCategory from "./SingleCategory";

const ListCategories = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  let category = store.getState().category;
  store.subscribe(() => {
    category = store.getState().category;

    if (category.categories) {
      setCategories(category.categories);
    }
  });
  useEffect(() => {
    setCategories(category.categories);
    if (categories.length === 0) dispatch(getAllCategories());
  }, []);
  return (
    <div className="row">
      {categories.map((category, index) => {
        return <SingleCategory key={index} category={category} />;
      })}
    </div>
  );
};

export default ListCategories;
