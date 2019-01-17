import React, { Component } from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "universal/components/app";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
