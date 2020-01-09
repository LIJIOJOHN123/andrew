import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import LetterAvatars from "./Avatar";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10,
    flexGrow: 1
  },
  img: {
    height: "60%",
    width: "50%",
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
  }
}));

export default function RecipeReviewCard({ single }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img
        className={classes.img}
        src="https://img-mm.manoramaonline.com/content/dam/mm/mo/news/just-in/images/2019/12/29/allpartymeeting.jpg"
      />

      <div className={classes.title}>
        <Typography variant="body2">I am working</Typography>
        <Typography variant="body2">DFALKJ</Typography>
      </div>
      <br />
      <div>Followers: 10000 Likes:100000 </div>
      <div> Article:30000 Language:English</div>
      <br />
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          Follow
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Like
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Share
        </Button>
      </div>
    </div>
  );
}
