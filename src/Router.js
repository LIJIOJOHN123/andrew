import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/Layout";
import Alert from "./components/Alert/Alert";
import {
  registerPage,
  loginPage,
  channlePage,
  articlesPage,
  homePage,
  channelDetailsPage
} from "./components/Loading/Loadable";
const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Fragment>
        <Alert />
        <Switch>
          <Route path="/" exact component={homePage} />
          <Route path="/login" exact component={loginPage} />
          <Route path="/register" exact component={registerPage} />
          <Route path="/channels" exact component={channlePage} />
          <Route path="/articles" exact component={articlesPage} />
          <Route path="/channel/:id" component={channelDetailsPage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;
