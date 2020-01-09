import React, { Fragment } from "react";
import { connect } from "react-redux";
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => {
    return <Fragment key={alert.id}>{alert.msg}</Fragment>;
  });

const mapStateToProps = state => ({
  alerts: state.alerts
});
export default connect(mapStateToProps)(Alert);
