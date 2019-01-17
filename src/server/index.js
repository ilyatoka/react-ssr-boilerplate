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

app.use("/assets", express.static(path.join(__dirname, "../client")));
app.use("/assets", express.static(path.join(__dirname, "../server")));

app.get("*", async (req, res, next) => {
  if (req.url.includes("/assets")) {
    return next();
  }

  const context = {};
  const preloadedState = { app: { test: null } };
  const { store } = configureStore(preloadedState, req.url);

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const finalState = store.getState();

  if (context.url) {
    res.redirect(context.url);
    return;
  } else {
    res
      .set("content-type", "text/html")
      .status(200)
      .send(render(html, finalState));
  }
});

app.listen(port, () => console.log("Express server listening on port 3000"));
