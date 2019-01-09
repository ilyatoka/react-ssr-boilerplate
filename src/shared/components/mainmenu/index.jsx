import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {};

const defaultProps = {};

export default function MainMenu(props) {
  return (
    <nav style={navBar}>
      <Link style={navLink} to="/">
        Home
      </Link>
      <Link style={navLink} to="/page-a">
        Page A
      </Link>
      <Link style={navLink} to="/page-b">
        Page B
      </Link>
    </nav>
  );
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;
