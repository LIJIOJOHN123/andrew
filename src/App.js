import React, { Fragment } from "react";
import Router from "./Router";
import { init } from "./redux/reducers/index";
import { Provider } from "react-redux";
import setTokens from "./utils/setTokens";
import { loadUser } from "./redux/action/auth";

if (localStorage.token) {
  setTokens(localStorage.token);
}
const App = () => {
  const store = init();
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, [store]);

  return (
    <Provider store={store}>
      <Fragment>
        <Router />
      </Fragment>
    </Provider>
  );
};

export default App;
