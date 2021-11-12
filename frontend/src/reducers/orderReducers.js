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
} from "../constants/orderConstants";

export const placeOrderReducer = (state = { placed: null }, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { loading: true, placed: null };
    case CREATE_ORDER_SUCCESS:
      return { loading: false, placed: true };
    case CREATE_ORDER_FAIL:
      return { loading: false, placed: false, error: action.payload };
    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true, orders: [] };
    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload.orders,
        total: action.payload.total,
      };
    case ORDER_LIST_FAIL:
      return { loading: false, orders: [], error: action.payload };
    default:
      return state;
  }
};

export const orderCreateReviewReducer = (state = { added: false }, action) => {
  switch (action.type) {
    case ORDER_REVIEW_ADD_REQUEST:
      return { loading: true, added: false };
    case ORDER_REVIEW_ADD_SUCCESS:
      return {
        loading: false,
        added: true,
      };
    case ORDER_REVIEW_ADD_FAIL:
      return { loading: false, added: false, error: action.payload };
    default:
      return state;
  }
};
