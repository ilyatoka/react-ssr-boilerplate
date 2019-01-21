import styles from "./page-b.scss";
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const propTypes = {};

const defaultProps = {};

export default function PageB(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>React SSR Boilerplate: Page B</title>
      </Helmet>

      <section className={styles.pageB}>
        <div className={styles.container}>
          <h1 className={styles.title}>Page B</h1>
        </div>
      </section>
    </React.Fragment>
  );
}

PageB.propTypes = propTypes;
PageB.defaultProps = defaultProps;
