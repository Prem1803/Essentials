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
} from "../constants/productConstants";

export const recentProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case RECENT_PRODUCT_REQUEST:
      return { loading: true, products: [] };
    case RECENT_PRODUCT_SUCCESS:
      return { loading: false, products: action.payload };
    case RECENT_PRODUCT_FAIL:
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

export const popularProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case POPULAR_PRODUCT_REQUEST:
      return { loading: true, products: [] };
    case POPULAR_PRODUCT_SUCCESS:
      return { loading: false, products: action.payload };
    case POPULAR_PRODUCT_FAIL:
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        total: action.payload.total,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

export const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true, product: {} };
    case PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_FAIL:
      return { loading: false, product: {}, error: action.payload };
    default:
      return state;
  }
};
