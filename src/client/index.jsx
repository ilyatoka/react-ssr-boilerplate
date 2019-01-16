import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadComponents } from "loadable-components";

import App from "shared/components/app";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <App {...this.props} />
      </BrowserRouter>
    );
  }
}

loadComponents()
  .then(() => {
    render(<Main />, document.getElementById("root"));
  })
  .catch(e => {
    console.error(e);
  });
