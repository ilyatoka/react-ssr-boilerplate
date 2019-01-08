import React from "react";
import { renderToString } from "react-dom/server";
import App from "./components/app";

export default function render(initialState) {
  // Configure the store with the initial state provided
  const store = {};

  // render the App store static markup ins content variable
  let content = renderToString(<App />);

  return { content };
}
