import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  getAllCategories,
  resetCategoryListError,
} from "../../../actions/CategoryActions";
import store from "../../../store";
import SingleCategory from "./SingleCategory";

const ListCategories = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  let category = store.getState().category;
  store.subscribe(() => {
    category = store.getState().category;
    if (category.error) {
      toast.error(category.error, {
        toastId: "Category-List-Error",
      });
      dispatch(resetCategoryListError());
    }
    if (category.categories) {
      setCategories(category.categories);
    }
  });
  useEffect(() => {
    setCategories(category.categories);
    if (category.categories && category.categories.length === 0)
      dispatch(getAllCategories());
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
