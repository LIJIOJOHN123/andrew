import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { getArtcles } from "../../redux/action/articles";
import Loading from "../Loading/Loading";
import PropTypes from "prop-types";

const useStyle = makeStyles(theme => ({
  leftButton: {
    Grow: 1
  },
  button: {
    marginRight: 10
  },
  flex: {
    display: "flex"
  }
}));
const ArticleList = ({ getArtcles, articles: { articles, loading } }) => {
  const classes = useStyle();
  React.useEffect(() => {
    getArtcles();
  }, [getArtcles]);
  // const button = (
  //   <div className={classes.flex}>
  //     <Button variant="contained" color="inherit" className={classes.button}>
  //       Follow
  //     </Button>
  //     <Button variant="contained" color="intherit" className={classes.button}>
  //       Followign
  //     </Button>
  //     <FormDialog />
  //   </div>
  // );
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Fragment className={classes.grow}>
          <Grid container>
            {articles.map(single => (
              <Grid key={single._id} item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Card single={single} />
              </Grid>
            ))}
          </Grid>
        </Fragment>
      )}
    </div>
  );
};
ArticleList.propTypes = {
  getArtcles: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};
export default connect(mapStateToProps, { getArtcles })(ArticleList);
