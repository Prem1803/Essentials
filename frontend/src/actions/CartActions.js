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

const addItemInLocalCart = async (requestBody) => {
  try {
    const { _id, quantity } = requestBody.products[0];
    let data = await getLocalCart();
    let cart = data.cart;
    data = await APICore("/product/single", "post", null, {
      productId: _id,
    });
    const product = data.product;
    let added = false;
    for (let item of cart) {
      if (item._id === _id) {
        item.quantity = quantity;
        added = true;
      }
    }
    if (!added) {
      cart.push({
        _id,
        quantity,
        name: product.name,
        description: product.description,
        image: product.images[0],
        amount: product.amount,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.log(error);
  }
};
const removeItemFromLocalCart = async (requestBody) => {
  const { product } = requestBody;
  let data = await getLocalCart();
  let cart = data.cart;
  let updatedCart = [];
  for (let item of cart) {
    if (item._id !== product) {
      updatedCart.push(item);
    }
  }
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const getLocalCart = async () => {
  let cart = localStorage.getItem("cart");

  if (!cart) localStorage.setItem("cart", JSON.stringify([]));
  cart = localStorage.getItem("cart");
  return { cart: JSON.parse(cart) };
};

export const getCartItems = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { token },
    } = getState();
    dispatch({
      type: CART_LIST_REQUEST,
    });

    let data;
    if (token) data = await APICore("/getCartItems", "get", token);
    else {
      data = await getLocalCart();
    }
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

    let data;
    if (token) {
      data = await APICore("/addToCart", "post", token, requestBody);

      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: data,
      });
      const cartdata = await APICore("/getCartItems", "get", token);

      dispatch({
        type: CART_LIST_SUCCESS,
        payload: cartdata.cart,
      });
    } else {
      data = await addItemInLocalCart(requestBody);

      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: data,
      });
      const cartdata = await getLocalCart();

      dispatch({
        type: CART_LIST_SUCCESS,
        payload: cartdata.cart,
      });
    }
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

    let data;
    if (token) {
      data = await APICore("/removeFromCart", "post", token, requestBody);

      dispatch({
        type: REMOVE_FROM_CART_SUCCESS,
        payload: data,
      });
      const cartdata = await APICore("/getCartItems", "get", token);

      dispatch({
        type: CART_LIST_SUCCESS,
        payload: cartdata.cart,
      });
    } else {
      data = await removeItemFromLocalCart(requestBody);

      dispatch({
        type: REMOVE_FROM_CART_SUCCESS,
        payload: data,
      });
      const cartdata = await getLocalCart();

      dispatch({
        type: CART_LIST_SUCCESS,
        payload: cartdata.cart,
      });
    }
  } catch (e) {
    dispatch({
      type: REMOVE_FROM_CART_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const resetCartListError = () => async (dispatch) => {
  dispatch({
    type: CART_LIST_FAIL,
  });
};
export const resetCartAddError = () => async (dispatch) => {
  dispatch({
    type: ADD_TO_CART_FAIL,
  });
};
