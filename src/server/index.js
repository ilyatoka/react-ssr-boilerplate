import path from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../universal/components/app";
import render from "./render";

const app = express();

app.use("/assets", express.static(path.join(__dirname, "../client")));
app.use("/assets", express.static(path.join(__dirname, "../server")));

app.get("*", async (req, res, next) => {
  const context = {};

  if (req.url.includes("/assets")) {
    return next();
  }

  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = renderToString(jsx);

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    res.redirect(context.url);
    return;
  } else {
    // we're good, send the response
    res
      .set("content-type", "text/html")
      .status(200)
      .send(render(html));
  }
});

app.listen(3000, () => console.log("Express server listening on port 3000"));
