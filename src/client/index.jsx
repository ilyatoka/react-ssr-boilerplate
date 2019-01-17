import React from "react";
import { Provider } from "react-redux";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "universal/components/app";
import { configureStore } from "universal/store/store";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
