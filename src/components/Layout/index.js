import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const useStyle = makeStyles(theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));
const Menu = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <div className={classes.sectionDesktop}>
        <DesktopMenu />
      </div>
      <div className={classes.sectionMobile}>
        <MobileMenu />
      </div>
    </Fragment>
  );
};

export default Menu;
