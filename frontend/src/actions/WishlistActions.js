import { APICore } from "../api/APICore";

import {
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_FAIL,
  REMOVE_FROM_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_FAIL,
  WISHLIST_LIST_REQUEST,
  WISHLIST_LIST_SUCCESS,
  WISHLIST_LIST_FAIL,
} from "../constants/wishlistConstants";

export const getWishlistItems = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: WISHLIST_LIST_REQUEST,
    });

    let data;
    if (token) {
      data = await APICore("/getWishlist", "get", token);

      dispatch({
        type: WISHLIST_LIST_SUCCESS,
        payload: data.wishlist,
      });
    }
  } catch (e) {
    dispatch({
      type: WISHLIST_LIST_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const addToWishlist = (requestBody) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: ADD_TO_WISHLIST_REQUEST,
    });

    let data;
    if (token) {
      data = await APICore("/addToWishlist", "post", token, requestBody);

      dispatch({
        type: ADD_TO_WISHLIST_SUCCESS,
        payload: data,
      });
      const wishlistdata = await APICore("/getWishlist", "get", token);

      dispatch({
        type: WISHLIST_LIST_SUCCESS,
        payload: wishlistdata.wishlist,
      });
    }
  } catch (e) {
    dispatch({
      type: ADD_TO_WISHLIST_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const removeFromWishlist =
  (requestBody) => async (dispatch, getState) => {
    try {
      const {
        userLogin: { token },
      } = getState();
      dispatch({
        type: REMOVE_FROM_WISHLIST_REQUEST,
      });

      let data;
      if (token) {
        data = await APICore("/removeFromWishlist", "post", token, requestBody);

        dispatch({
          type: REMOVE_FROM_WISHLIST_SUCCESS,
          payload: data,
        });
        const wishlistdata = await APICore("/getWishlist", "get", token);

        dispatch({
          type: WISHLIST_LIST_SUCCESS,
          payload: wishlistdata.wishlist,
        });
      }
    } catch (e) {
      dispatch({
        type: REMOVE_FROM_WISHLIST_FAIL,
        payload:
          e.response && e.response.data.error ? e.response.data.error : e.error,
      });
    }
  };
