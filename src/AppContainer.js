import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import App from "./App";

const mapDispatchToProps = dispatch => {
  return {};
};

export default compose(withRouter, connect(null, mapDispatchToProps))(App);
