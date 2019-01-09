import styles from "./app.scss";
import React from "react";
import PropTypes from "prop-types";
import MainMenu from "../mainmenu";
import * as Routes from "./routes";

const propTypes = {};

const defaultProps = {};

export default function App(props) {
  return (
    <div>
      <MainMenu />
      <Switch>
        <Route exact path="/" component={Routes.HomePage} />
        <Route path="/page-a" component={Routes.PageA} />
        <Route path="/page-b" component={Routes.PageB} />
      </Switch>
    </div>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
