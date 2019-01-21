import styles from "./page-a.scss";
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const propTypes = {};

const defaultProps = {};

export default function PageA(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>React SSR Boilerplate: Page A</title>
      </Helmet>

      <section className={styles.pageA}>
        <div className={styles.container}>
          <h1 className={styles.title}>Page A</h1>
        </div>
      </section>
    </React.Fragment>
  );
}

PageA.propTypes = propTypes;
PageA.defaultProps = defaultProps;
