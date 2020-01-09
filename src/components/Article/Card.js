import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10,
    flexGrow: 1
  },
  img: {
    height: 160,
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
        alt={single.postDetails[0].image}
        src={single.postDetails[0].image}
      />

      <div>
        <Typography variant="body2">I am working</Typography>
        <Typography variant="body2">DFALKJ</Typography>
      </div>
      <br />
      <div>Followers: 10000 Likes:100000 </div>
      <div> Article:30000 Language:English</div>
      <br />
      <div>
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
