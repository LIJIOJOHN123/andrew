import {
  CHANNEL_FETCH,
  CHANNEL_CREATE,
  CHANNEL_FETCHBY_ID
} from "../action/typeof";
const initialState = {
  channels: [],
  channel: null,
  loading: true
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CHANNEL_FETCH:
      return { ...state, channels: payload, loading: false };
    case CHANNEL_FETCHBY_ID:
      return {
        ...state,
        channel: payload,
        loading: false
      };
    case CHANNEL_CREATE:
      return {
        ...state,
        channels: [payload, ...state.channels],
        loading: false
      };
    default:
      return state;
  }
};
