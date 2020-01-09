import { GET_ARTICLES, REGISTER_FAIL } from "./typeof";
import { setAlert } from "./alert";
import Axios from "axios";

export const getArtcles = () => async dispatch => {
  try {
    const res = await Axios.get(`http://localhost:8000/api/posts`);
    dispatch({ type: GET_ARTICLES, payload: res.data });
  } catch (error) {
    const errors = error.response.data.errros;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};
