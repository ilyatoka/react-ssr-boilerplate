import styles from "./app.scss";
import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import MainNav from "universal/components/main-nav";
import HomePage from "universal/components/home-page";
import PageA from "universal/components/page-a";
import PageB from "universal/components/page-b";

const propTypes = {};

const defaultProps = {};

@connect((state, props) => {
  return {
    test: state.getIn(["app", "test"])
  };
})
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>React SSR Boilerplate</title>
          <meta name="description" content="Web page description" />
          <meta name="keywords" content="keywords" />
        </Helmet>

        <MainNav />
        <h3 className={styles.title}>
          Test server-rendered response from the api: <b>{this.props.test}</b>
        </h3>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/page-a" component={PageA} />
          <Route path="/page-b" component={PageB} />
        </Switch>
      </React.Fragment>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
