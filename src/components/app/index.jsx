import styles from "./app.scss";
import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

export default function App(props) {
  return (
    <section className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hello world from the server</h1>
      </div>
    </section>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
