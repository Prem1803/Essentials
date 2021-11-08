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

export const addToCartReducer = (state = { added: null }, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return { loading: true, added: null };
    case ADD_TO_CART_SUCCESS:
      return { loading: false, added: true };
    case ADD_TO_CART_FAIL:
      return { loading: false, added: false, error: action.payload };
    default:
      return state;
  }
};

export const removeFromCartReducer = (state = { removed: null }, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART_REQUEST:
      return { loading: true, removed: null };
    case REMOVE_FROM_CART_SUCCESS:
      return { loading: false, removed: true };
    case REMOVE_FROM_CART_FAIL:
      return { loading: false, removed: false, error: action.payload };
    default:
      return state;
  }
};
export const cartListReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_LIST_REQUEST:
      return { loading: true, cartItems: [] };
    case CART_LIST_SUCCESS:
      return {
        loading: false,
        cartItems: action.payload,
      };
    case CART_LIST_FAIL:
      return { loading: false, cartItems: [], error: action.payload };
    default:
      return state;
  }
};
