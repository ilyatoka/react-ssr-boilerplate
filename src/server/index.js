import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../shared/components/app";
// render is used to inject html in a globale template
import render from "./render";

const app = express();
// Serve client.js and vendor.js
app.use("/assets", express.static("./build"));

app.get("*", (req, res) => {
  const context = {};

  const appWithRouter = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  const html = ReactDOMServer.renderToString(appWithRouter);

  res.status(200).send(render(html));
});

app.listen(3000, () => console.log("Demo app listening on port 3000"));
