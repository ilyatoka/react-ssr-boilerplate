import styles from "./app.scss";
import React from "react";
import PropTypes from "prop-types";
import * as Routes from "./routes";
import MainNav from "shared/components/main-nav";

const propTypes = {};

const defaultProps = {};

export default function App(props) {
  return (
    <React.Fragment>
      <MainNav />
      <Switch>
        <Route exact path="/" component={Routes.HomePage} />
        <Route path="/page-a" component={Routes.PageA} />
        <Route path="/page-b" component={Routes.PageB} />
      </Switch>
    </React.Fragment>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
