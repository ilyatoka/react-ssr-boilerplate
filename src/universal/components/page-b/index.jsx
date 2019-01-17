import styles from "./page-b.scss";
import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

export default function PageB(props) {
  return (
    <section className={styles.pageB}>
      <div className={styles.container}>
        <h1 className={styles.title}>Page B</h1>
      </div>
    </section>
  );
}

PageB.propTypes = propTypes;
PageB.defaultProps = defaultProps;
