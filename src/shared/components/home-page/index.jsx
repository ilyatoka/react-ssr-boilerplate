import styles from "./home-page.scss";
import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

export default function HomePage(props) {
  return (
    <section className={styles.homePage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Home page</h1>
      </div>
    </section>
  );
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;
