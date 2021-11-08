import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import {
  recentProductsReducer,
  popularProductsReducer,
  productListReducer,
  productReducer,
} from "./reducers/productReducers";
import {
  addToCartReducer,
  removeFromCartReducer,
  cartListReducer,
} from "./reducers/cartReducers";
import { categoryReducer } from "./reducers/categoryReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  recentProducts: recentProductsReducer,
  popularProducts: popularProductsReducer,
  category: categoryReducer,
  products: productListReducer,
  product: productReducer,
  addToCart: addToCartReducer,
  removeFromCart: removeFromCartReducer,
  cart: cartListReducer,
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
