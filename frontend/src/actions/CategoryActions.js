import { APICore } from "../api/APICore";

import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAIL,
} from "../constants/categoryConstants";

export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORY_REQUEST,
    });

    const data = await APICore("/categories", "get", null);

    dispatch({
      type: CATEGORY_SUCCESS,
      payload: data.categories,
    });
  } catch (e) {
    dispatch({
      type: CATEGORY_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
