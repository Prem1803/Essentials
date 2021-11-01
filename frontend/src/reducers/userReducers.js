import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (state = { token: null }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, token: null };
    case USER_LOGIN_SUCCESS:
      return { loading: false, token: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, token: null, error: action.payload };
    case USER_LOGOUT:
      return { token: null };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = { token: null }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, token: null };
    case USER_REGISTER_SUCCESS:
      return { loading: false, token: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, token: null, error: action.payload };
    case USER_LOGOUT:
      return { token: null };
    default:
      return state;
  }
};
