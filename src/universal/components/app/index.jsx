import styles from "./app.scss";
import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import MainNav from "universal/components/main-nav";
import HomePage from "universal/components/home-page";
import PageA from "universal/components/page-a";
import PageB from "universal/components/page-b";

const propTypes = {};

const defaultProps = {};

export default function App(props) {
  return (
    <React.Fragment>
      <MainNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/page-a" component={PageA} />
        <Route path="/page-b" component={PageB} />
      </Switch>
    </React.Fragment>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
