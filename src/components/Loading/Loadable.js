import Loadable from "react-loadable";
import Loading from "./Loading";

export const loginPage = Loadable({
  loader: () => import("../Auth/Login"),
  loading: Loading
});

export const registerPage = Loadable({
  loader: () => import("../Auth/Register"),
  loading: Loading
});
export const channlePage = Loadable({
  loader: () => import("../Channel/index"),
  loading: Loading
});
export const articlesPage = Loadable({
  loader: () => import("../Article/index"),
  loading: Loading
});
export const homePage = Loadable({
  loader: () => import("../Home/index"),
  loading: Loading
});
export const channelDetailsPage = Loadable({
  loader: () => import("../Channel/ChannelDetails/index"),
  loading: Loading
});
