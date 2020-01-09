import axios from "axios";
import { CHANNEL_CREATE, CHANNEL_FETCH, CHANNEL_FETCHBY_ID } from "./typeof";

export const fetchChannels = () => async dispatch => {
  const res = await axios.get("http://localhost:8000/api/channels");
  dispatch({ type: CHANNEL_FETCH, payload: res.data });
};
export const createChannel = formData => async dispatch => {
  const res = await axios.post("http://localhost:8000/api/channel", formData);
  dispatch({ type: CHANNEL_CREATE, payload: res.data });
};
export const fetchChannelById = id => async dispatch => {
  const res = await axios.get(`http://localhost:8000/api/channels/${id}`);
  console.log(res);
  dispatch({ type: CHANNEL_FETCHBY_ID, payload: res.data });
};
