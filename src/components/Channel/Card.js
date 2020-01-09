import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10,
    flexGrow: 1
  },
  img: {
    height: "60%",
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  margin: {
    marginTop: "-2%"
  },
  link: {
    textDecoration: "none"
  },
  icon: {
    marginTop: "-13%",
    marginLeft: "-3%"
  },
  button: {
    marginRight: 10
  },
  root: {
    display: "flex",
    marginLeft: "-5%",
    "& > *": {
      margin: theme.spacing(1)
    }
  },

  bigAvatar: {
    width: 120,
    height: 120
  }
}));

export default function RecipeReviewCard({ single }, props) {
  console.log(props.match);
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Link to={`/channel/${single._id}`}>
        <div className={classes.root}>
          <Avatar
            alt="Remy Sharp"
            src={single.avatar}
            className={classes.bigAvatar}
          />
        </div>

        <div className={classes.title}>
          <Typography variant="body2">{single.channelName}</Typography>
          <Typography variant="body2">{single.introduction}</Typography>
        </div>
      </Link>
      <br />

      <div>Followers: 10000 Likes:100000 </div>
      <div> Article:30000 Language:English</div>
      <br />
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          Follow
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Share
        </Button>
      </div>
    </div>
  );
}
