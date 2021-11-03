import { APICore } from "../api/APICore";

import {
  RECENT_PRODUCT_REQUEST,
  RECENT_PRODUCT_SUCCESS,
  RECENT_PRODUCT_FAIL,
  POPULAR_PRODUCT_REQUEST,
  POPULAR_PRODUCT_SUCCESS,
  POPULAR_PRODUCT_FAIL,
} from "../constants/productConstants";

export const getRecentProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: RECENT_PRODUCT_REQUEST,
    });

    const data = await APICore("/products/recent", "get", null);

    dispatch({
      type: RECENT_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (e) {
    dispatch({
      type: RECENT_PRODUCT_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};

export const getPopularProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: POPULAR_PRODUCT_REQUEST,
    });

    const data = await APICore("/products/popular", "get", null);

    dispatch({
      type: POPULAR_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (e) {
    dispatch({
      type: POPULAR_PRODUCT_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
