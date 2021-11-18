import { APICore } from "../api/APICore";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_REVIEW_ADD_REQUEST,
  ORDER_REVIEW_ADD_SUCCESS,
  ORDER_REVIEW_ADD_FAIL,
  STORE_ORDER_LIST_REQUEST,
  STORE_ORDER_LIST_SUCCESS,
  STORE_ORDER_LIST_FAIL,
  STORE_ORDER_UPDATE_REQUEST,
  STORE_ORDER_UPDATE_SUCCESS,
  STORE_ORDER_UPDATE_FAIL,
  STORE_ORDER_SUMMARY_REQUEST,
  STORE_ORDER_SUMMARY_SUCCESS,
  STORE_ORDER_SUMMARY_FAIL,
} from "../constants/orderConstants";
import { CART_LIST_SUCCESS } from "../constants/cartConstants";

export const getOrders = (requestBody) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: ORDER_LIST_REQUEST,
    });

    let data;
    if (token) {
      data = await APICore("/orders", "post", token, requestBody);

      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const getStoreOrders = (requestBody) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: STORE_ORDER_LIST_REQUEST,
    });

    let data;
    if (token) {
      data = await APICore("/storeorders", "post", token, requestBody);

      dispatch({
        type: STORE_ORDER_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {
    dispatch({
      type: STORE_ORDER_LIST_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const getStoreOrderSummary = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: STORE_ORDER_SUMMARY_REQUEST,
    });

    let data;
    if (token) {
      data = await APICore("/storeorders/summary", "get", token);

      dispatch({
        type: STORE_ORDER_SUMMARY_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {
    dispatch({
      type: STORE_ORDER_SUMMARY_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const updateStoreOrder = (requestBody) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: STORE_ORDER_UPDATE_REQUEST,
    });

    let data;
    if (token) {
      data = await APICore("/updatestoreorder", "post", token, requestBody);

      dispatch({
        type: STORE_ORDER_UPDATE_SUCCESS,
        payload: data,
      });
      data = await APICore("/storeorders", "post", token, { page: 1 });

      dispatch({
        type: STORE_ORDER_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {
    dispatch({
      type: STORE_ORDER_UPDATE_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const placeOrder = (requestBody) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: CREATE_ORDER_REQUEST,
    });

    let data;
    if (token) {
      data = await APICore("/order/create", "post", token, requestBody);

      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: CART_LIST_SUCCESS,
        payload: [],
      });
    }
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};

export const updateReview = (requestBody) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: ORDER_REVIEW_ADD_REQUEST,
    });

    let data;
    if (token) {
      data = await APICore("/order/review", "post", token, requestBody);

      dispatch({
        type: ORDER_REVIEW_ADD_SUCCESS,
        payload: data,
      });
      data = await APICore("/orders", "post", token, requestBody);

      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {
    dispatch({
      type: ORDER_REVIEW_ADD_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
