import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import CreateChannel from "./Create";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchChannels } from "../../redux/action/channel";
import Loading from "../Loading/Loading";

const ChannelList = ({
  fetchChannels,
  channels: { channels, loading },
  auth: { isAuthenticated }
}) => {
  React.useEffect(() => {
    fetchChannels();
  }, [fetchChannels]);
  return (
    <div>
      {isAuthenticated ? <CreateChannel /> : null}
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Grid container>
            {channels.map(single => (
              <Grid key={single._id} item xs={6} sm={6} md={3} lg={2} xl={2}>
                <Card single={single} />
              </Grid>
            ))}
          </Grid>
        </Fragment>
      )}
    </div>
  );
};
ChannelList.propTypes = {
  fetchChannels: PropTypes.func.isRequired,
  channels: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    channels: state.channels,
    auth: state.auth
  };
};

export default connect(mapStateToProps, { fetchChannels })(ChannelList);
