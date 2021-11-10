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

export const addToWishlistReducer = (state = { added: null }, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST_REQUEST:
      return { loading: true, added: null };
    case ADD_TO_WISHLIST_SUCCESS:
      return { loading: false, added: true };
    case ADD_TO_WISHLIST_FAIL:
      return { loading: false, added: false, error: action.payload };
    default:
      return state;
  }
};

export const removeFromWishlistReducer = (
  state = { removed: null },
  action
) => {
  switch (action.type) {
    case REMOVE_FROM_WISHLIST_REQUEST:
      return { loading: true, removed: null };
    case REMOVE_FROM_WISHLIST_SUCCESS:
      return { loading: false, removed: true };
    case REMOVE_FROM_WISHLIST_FAIL:
      return { loading: false, removed: false, error: action.payload };
    default:
      return state;
  }
};
export const wishListReducer = (state = { wishlistItems: [] }, action) => {
  switch (action.type) {
    case WISHLIST_LIST_REQUEST:
      return { loading: true, wishlistItems: [] };
    case WISHLIST_LIST_SUCCESS:
      return {
        loading: false,
        wishlistItems: action.payload,
      };
    case WISHLIST_LIST_FAIL:
      return { loading: false, wishlistItems: [], error: action.payload };
    default:
      return state;
  }
};
