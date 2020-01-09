import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: "flex",
  //   "& > * + *": {
  //     marginLeft: theme.spacing(2)
  //   }
  // },
  center: {
    display: "block",
    marginTop: "20%",
    marginLeft: "45%",
    marginRight: "auto",
    width: "50%"
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </div>
  );
}
