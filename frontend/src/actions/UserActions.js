import { APICore } from "../api/APICore";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const login = (requestBody) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const data = await APICore("/user/login", "post", null, requestBody);
    localStorage.setItem("essentialUser", data.token);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.token,
    });
  } catch (e) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};
export const register = (requestBody) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const data = await APICore("/user/signup", "post", null, requestBody);
    localStorage.setItem("essentialUser", data.token);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.token,
    });
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.token,
    });
  } catch (e) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.error,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("essentialUser");
    dispatch({
      type: USER_LOGOUT,
      payload: null,
    });
  } catch (e) {}
};
