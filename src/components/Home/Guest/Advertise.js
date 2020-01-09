import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "./Articles/Card";

const GuestAd = () => {
  return (
    <Fragment>
      <Typography>Ads</Typography>
      <Grid container>
        {[1, 2, 3, 4].map(single => (
          <Grid key={single} item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card single={single} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default GuestAd;
