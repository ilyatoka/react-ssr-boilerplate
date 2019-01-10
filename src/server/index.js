import path from "path";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { getLoadableState } from "loadable-components/server";

import App from "../shared/components/app";
import render from "./render";

const app = express();

app.get("*", async (req, res, next) => {
  const context = {};

  const appWithRouter = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (req.url.includes("/assets")) {
    return next();
  }

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  const loadableState = await getLoadableState(appWithRouter);
  const html = ReactDOMServer.renderToString(appWithRouter);

  res.status(200).send(render(html, loadableState));
});

app.use("/assets", express.static(path.join(__dirname, "../client")));

app.listen(3000, () => console.log("Demo app listening on port 3000"));
