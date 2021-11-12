import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_IMAGE_UPDATE_REQUEST,
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

export const userDetailsReducer = (state = { userDetails: null }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true, userDetails: null };
    case USER_DETAILS_SUCCESS:
      return { loading: false, userDetails: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, userDetails: null, error: action.payload };
    default:
      return state;
  }
};

export const updateUserDetailsReducer = (
  state = { userDetails: null },
  action
) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true, userDetails: null };
    case USER_UPDATE_SUCCESS:
      return { loading: false, userDetails: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, userDetails: null, error: action.payload };
    default:
      return state;
  }
};

export const userImageReducer = (state = "", action) => {
  switch (action.type) {
    case USER_IMAGE_UPDATE_REQUEST:
      return action.payload;
    default:
      return state;
  }
};
