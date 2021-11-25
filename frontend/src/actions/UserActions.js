import { APICore, FormDataAPI } from "../api/APICore";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_IMAGE_UPDATE_REQUEST,
} from "../constants/userConstants";
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  CART_LIST_SUCCESS,
} from "../constants/cartConstants";

export const login = (requestBody) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const data = await APICore("/user/login", "post", null, requestBody);
    localStorage.setItem("essentialUser", data.token);
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      dispatch({
        type: ADD_TO_CART_REQUEST,
      });
      const addToCartdata = await APICore("/addToCart", "post", data.token, {
        products: cart,
      });

      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: data,
      });
      const cartdata = await APICore("/getCartItems", "get", data.token);

      dispatch({
        type: CART_LIST_SUCCESS,
        payload: cartdata.cart,
      });
    }
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.token,
    });
  } catch (e) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const register = (requestBody) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const data = await APICore("/user/signup", "post", null, requestBody);
    localStorage.setItem("essentialUser", data.token);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.token,
    });
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.token,
    });
  } catch (e) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("essentialUser");
    localStorage.removeItem("cart");
    dispatch({
      type: USER_LOGOUT,
      payload: null,
    });
  } catch (e) {}
};

export const getUserDetails = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    if (token) {
      const data = await APICore("/user", "get", token);
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data.user,
      });
    }
  } catch (e) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: null,
    });
  }
};

export const updateUserDetails =
  (requestBody) => async (dispatch, getState) => {
    try {
      const {
        userLogin: { token },
      } = getState();
      dispatch({
        type: USER_UPDATE_REQUEST,
      });

      if (token) {
        const data = await FormDataAPI(
          "/user/updateDetails",
          "post",
          token,
          requestBody
        );
        dispatch({
          type: USER_UPDATE_SUCCESS,
          payload: data.user,
        });
        dispatch({
          type: USER_DETAILS_SUCCESS,
          payload: data.user,
        });
      }
    } catch (e) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          e.response && e.response.data.error ? e.response.data.error : e.error,
      });
    }
  };

export const updateUserImage = (imageUrl) => async (dispatch) => {
  try {
    dispatch({
      type: USER_IMAGE_UPDATE_REQUEST,
      payload: imageUrl,
    });
  } catch (e) {}
};

export const resetLoginError = () => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_FAIL,
  });
};
export const resetRegistrationError = () => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_FAIL,
  });
};
export const resetUpdateUserError = () => async (dispatch) => {
  dispatch({
    type: USER_UPDATE_FAIL,
  });
};
