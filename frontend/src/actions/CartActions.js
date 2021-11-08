import { APICore } from "../api/APICore";

import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
} from "../constants/cartConstants";

export const getCartItems = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: CART_LIST_REQUEST,
    });

    const data = await APICore("/getCartItems", "get", token);

    dispatch({
      type: CART_LIST_SUCCESS,
      payload: data.cart,
    });
  } catch (e) {
    dispatch({
      type: CART_LIST_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const addToCart = (requestBody) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: ADD_TO_CART_REQUEST,
    });

    const data = await APICore("/addToCart", "post", token, requestBody);

    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: data,
    });
    const cartdata = await APICore("/getCartItems", "get", token);

    dispatch({
      type: CART_LIST_SUCCESS,
      payload: cartdata.cart,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const removeFromCart = (requestBody) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: REMOVE_FROM_CART_REQUEST,
    });

    const data = await APICore("/removeFromCart", "post", token, requestBody);

    dispatch({
      type: REMOVE_FROM_CART_SUCCESS,
      payload: data,
    });
    const cartdata = await APICore("/getCartItems", "get", token);

    dispatch({
      type: CART_LIST_SUCCESS,
      payload: cartdata.cart,
    });
  } catch (e) {
    dispatch({
      type: REMOVE_FROM_CART_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
