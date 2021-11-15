import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  updateUserDetailsReducer,
  userImageReducer,
} from "./reducers/userReducers";
import {
  recentProductsReducer,
  popularProductsReducer,
  productListReducer,
  productReducer,
  userproductReducer,
} from "./reducers/productReducers";
import {
  addToCartReducer,
  removeFromCartReducer,
  cartListReducer,
} from "./reducers/cartReducers";
import {
  placeOrderReducer,
  orderListReducer,
  orderCreateReviewReducer,
} from "./reducers/orderReducers";
import {
  addToWishlistReducer,
  removeFromWishlistReducer,
  wishListReducer,
} from "./reducers/wishlistReducers";
import { categoryReducer } from "./reducers/categoryReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  user: userDetailsReducer,
  updateUser: updateUserDetailsReducer,
  recentProducts: recentProductsReducer,
  popularProducts: popularProductsReducer,
  category: categoryReducer,
  products: productListReducer,
  userProducts: userproductReducer,
  product: productReducer,
  addToCart: addToCartReducer,
  removeFromCart: removeFromCartReducer,
  cart: cartListReducer,
  addToWishlist: addToWishlistReducer,
  removeFromWishlist: removeFromWishlistReducer,
  wishlist: wishListReducer,
  placeOrder: placeOrderReducer,
  orderList: orderListReducer,
  orderReview: orderCreateReviewReducer,
  userImage: userImageReducer,
});

const userInfoFromStorage = localStorage.getItem("essentialUser")
  ? localStorage.getItem("essentialUser")
  : null;

const initialState = {
  userLogin: { token: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
