import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "./Avatar";
import SubHead from "./SubHead";
import { connect } from "react-redux";
import { fetchChannelById } from "../../../redux/action/channel";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "auto"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: 300,
      width: "100%",
      marginTop: 20
    }
  },
  sectionMobile: {
    display: "flex",
    height: 200,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  sectionDesktop1: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginTop: "-6%"
    }
  },
  sectionMobile1: {
    display: "flex",
    marginTop: "-14%",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },

  link: {
    textDecoration: "none"
  },
  tab: {
    marginTop: "-3%"
  }
}));

const ChannelCardDetails = props => {
  const classes = useStyles();
  React.useEffect(() => {
    fetchChannelById(props.match.params.id) //instead of ;
  }, [fetchChannelById]);
  return (
    <div className={classes.card}>
      <div>
        <img
          className={classes.sectionDesktop}
          src="http://www.trendycovers.com/covers/merry_christmas_facebook_cover_1482383639.jpg"
        />
        <img
          className={classes.sectionMobile}
          src="http://www.trendycovers.com/covers/merry_christmas_facebook_cover_1482383639.jpg"
        />
      </div>
      <div className={classes.sectionDesktop1}>
        <Avatar />
      </div>
      <div className={classes.sectionMobile1}>
        <Avatar />
      </div>
      <div className={classes.tab}>
        <SubHead />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    channels: state.channels
  };
};
export default connect(mapStateToProps, { fetchChannelById })(
  ChannelCardDetails
);
