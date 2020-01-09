import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import channelReducer from "./channelReducer";
import articleReducer from "./articleReducer";
export const init = () => {
  const reducer = combineReducers({
    alerts: alertReducer,
    auth: authReducer,
    channels: channelReducer,
    articles: articleReducer
  });
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
};
