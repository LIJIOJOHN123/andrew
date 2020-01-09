import React, { Fragment } from "react";
import GuestChannels from "./Guest/Channels";
import GuestArticles from "./Guest/Articles/Articles";
import GuestAd from "./Guest/Advertise";
import CenteredTabs from "./Guest/Tabs";
const Home = () => {
  return (
    <Fragment>
      <CenteredTabs />
      <GuestAd />
      <GuestArticles />
      <GuestChannels />
    </Fragment>
  );
};

export default Home;
