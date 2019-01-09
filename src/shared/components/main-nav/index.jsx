import styles from "./main-nav.scss";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {};

const defaultProps = {};

export default function MainNav(props) {
  return (
    <nav className={styles.mainNav}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/page-a">
        Page A
      </Link>
      <Link className={styles.link} to="/page-b">
        Page B
      </Link>
    </nav>
  );
}

MainNav.propTypes = propTypes;
MainNav.defaultProps = defaultProps;
