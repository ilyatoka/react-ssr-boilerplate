import express from "express";
import path from "path";
import template from "../client/template.js";
import render from "../client/server.js";
import fs from "fs";

const bundleDir = path.join(__dirname, "..", "bundle");

const assets = fs.readdirSync(bundleDir);
const js = assets.filter(file => file.endsWith(".js"));
const css = assets.filter(file => file.endsWith(".css"));
const app = express();

// Serving static files
app.use("/build", express.static(path.resolve(__dirname, "../")));

// hide powered by express
app.disable("x-powered-by");
// start the server
app.listen(process.env.PORT || 3000);

let initialState = {
  isFetching: false
};

// server rendered home page
app.get("/", (req, res) => {
  const { content } = render(initialState);
  const response = template("Server Rendered Page", content, js, css);
  res.send(response);
});
