import styles from "./home-page.scss";
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const propTypes = {};

const defaultProps = {};

export default function HomePage(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>React SSR Boilerplate: Home</title>
      </Helmet>

      <section className={styles.homePage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Home page</h1>
        </div>
      </section>
    </React.Fragment>
  );
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;
