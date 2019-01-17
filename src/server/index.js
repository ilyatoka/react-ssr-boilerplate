import qs from "qs";
import path from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../universal/store/store";

import App from "../universal/components/app";
import render from "./render";

const app = express();
const port = 3000;

//Serve static files
app.use("/assets", express.static(path.join(__dirname, "../client")));
app.use("/assets", express.static(path.join(__dirname, "../server")));

app.get("*", async (req, res, next) => {
  // Take next request if client asked for static file
  if (req.url.includes("/assets")) {
    return next();
  }

  // Hold app context for react-router
  const context = {};

  // Read the 'test' param from the request, if provided
  const params = qs.parse(req.query);
  const testParam = parseInt(params.test, 10) || null;

  // Compile an initial state
  let preloadedState = { app: { test: testParam } };

  // Create a store (with a memory history) from our current url
  const { store } = configureStore(preloadedState, req.url);

  const jsx = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const html = renderToString(jsx);

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    res.redirect(context.url);
    return;
  } else {
    // we're good, send the response
    res
      .set("content-type", "text/html")
      .status(200)
      .send(render(html, finalState));
  }
});

app.listen(port, () => console.log("Express server listening on port 3000"));
