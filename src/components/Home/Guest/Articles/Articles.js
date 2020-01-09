import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "./Card";
const GuestArticles = () => {
  return (
    <Fragment>
      <Typography>Top Stories</Typography>
      <Grid container>
        {[
          1,
          2,
          3,
          4,
          6,
          5,
          7,
          8,
          11,
          12,
          13,
          14,
          16,
          15,
          17,
          18,
          21,
          22,
          23,
          26,
          25,
          27,
          28
        ].map(single => (
          <Grid key={single} item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card single={single} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default GuestArticles;
