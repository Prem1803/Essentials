import { APICore, FormDataAPI } from "../api/APICore";

import {
  RECENT_PRODUCT_REQUEST,
  RECENT_PRODUCT_SUCCESS,
  RECENT_PRODUCT_FAIL,
  POPULAR_PRODUCT_REQUEST,
  POPULAR_PRODUCT_SUCCESS,
  POPULAR_PRODUCT_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  USER_PRODUCT_LIST_REQUEST,
  USER_PRODUCT_LIST_SUCCESS,
  USER_PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
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

export const getAllProducts = (requestBody) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const data = await APICore("/products", "post", null, requestBody);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};

export const getSingleProduct = (requestBody) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_REQUEST,
    });

    const data = await APICore("/product/single", "post", null, requestBody);

    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data.product,
    });
  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};

export const getAllUserProducts =
  (requestBody) => async (dispatch, getState) => {
    try {
      const {
        userLogin: { token },
      } = getState();

      let data;
      if (token) {
        data = await APICore("/storeProducts", "post", token, requestBody);
        dispatch({
          type: USER_PRODUCT_LIST_REQUEST,
        });
        dispatch({
          type: USER_PRODUCT_LIST_SUCCESS,
          payload: data,
        });
      }
    } catch (e) {
      dispatch({
        type: USER_PRODUCT_LIST_FAIL,
        payload:
          e.response && e.response.data.error ? e.response.data.error : e.error,
      });
    }
  };

export const createProduct = (requestBody) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();

    let data;
    if (token) {
      data = await FormDataAPI("/product/create", "post", token, requestBody);
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      });
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
      data = await APICore("/storeProducts", "post", token, {
        page: 1,
        search: "",
      });
      dispatch({
        type: USER_PRODUCT_LIST_REQUEST,
      });
      dispatch({
        type: USER_PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};

export const updateProduct = (requestBody) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();

    let data;
    if (token) {
      data = await FormDataAPI("/product/update", "post", token, requestBody);
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      });
      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
      data = await APICore("/storeProducts", "post", token, {
        page: 1,
        search: "",
      });
      dispatch({
        type: USER_PRODUCT_LIST_REQUEST,
      });
      dispatch({
        type: USER_PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
