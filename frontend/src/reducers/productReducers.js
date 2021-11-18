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
export const createProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true, product: {} };
    case PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, product: {}, error: action.payload };
    default:
      return state;
  }
};
export const updateProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true, product: {} };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, product: {}, error: action.payload };
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

export const userproductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case USER_PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case USER_PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        total: action.payload.total,
      };
    case USER_PRODUCT_LIST_FAIL:
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};
