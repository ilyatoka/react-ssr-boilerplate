import styles from "./page-a.scss";
import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

export default function PageA(props) {
  return (
    <section className={styles.pageA}>
      <div className={styles.container}>
        <h1 className={styles.title}>Page A</h1>
      </div>
    </section>
  );
}

PageA.propTypes = propTypes;
PageA.defaultProps = defaultProps;
