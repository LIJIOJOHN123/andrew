import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_PROFILE
} from "./typeof";
import { setAlert } from "./alert";
import setTokens from "../../utils/setTokens";

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setTokens(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:8000/api/user");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};
export const register = formData => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/register",
      formData
    );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};
export const login = formData => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8000/api/login", formData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    if (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }
    }
    dispatch({ type: LOGIN_FAIL });
  }
};
export const logout = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
