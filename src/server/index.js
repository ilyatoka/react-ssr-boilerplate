import path from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import configureStore from "../universal/store/store";

import App from "../universal/components/app";
import render from "./render";

const app = express();
const port = 3000;

app.use("/assets", express.static(path.join(__dirname, "../client")));
app.use("/assets", express.static(path.join(__dirname, "../server")));

app.get("/api/v1/test", (req, res, next) => {
  res.json("Yay! I'm response from the server API");
});

app.get("*", async (req, res, next) => {
  if (req.url.includes("/assets")) {
    return next();
  }
  if (req.url.includes("/favicon.ico")) {
    return next();
  }

  let html = "";
  const context = {};
  const preloadedState = { app: { test: "Preloaded State" } };
  const { store } = configureStore(preloadedState, req.url);

  const appWithRouter = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  // First render to catch in-app Redirects
  html = renderToString(appWithRouter);

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  // .done is resolved when store.close() send an END event
  store.serverRunSaga().done.then(() => {
    // Second render
    html = renderToString(appWithRouter);
    const finalState = store.getState();
    const helmet = Helmet.renderStatic();

    res
      .set("content-type", "text/html")
      .status(200)
      .send(render(html, finalState, helmet));
  });

  // Dispatch a close event so sagas stop listening after they're resolved
  store.serverStopSaga();
});

app.listen(port, () => console.log("Express server listening on port 3000"));
