import { GET_ARTICLES } from "../action/typeof";

const initailState = {
  artilces: [],
  article: {},
  loading: true
};

export default (state = initailState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload,
        loading: false
      };
    default:
      return state;
  }
};
