import express from "express";
import path from "path";

import { Provider as ReduxProvider } from "react-redux";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";
import createStore, { initializeSession, toggleLogin } from "./store";

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (req, res) => {
  // reference react component
  const context = {};
  const store = createStore();
  // dispatch initializeSession action to set up the store
  // default state=true

  store.dispatch(initializeSession());
  store.dispatch(toggleLogin());
  const dataRequirements = routes
    .filter(route => matchPath(req.url, route))
    .map(route => route.component)
    .filter(comp => comp.serverFetch)
    .map(comp => store.dispatch(comp.serverFetch()));

  Promise.all(dataRequirements).then(() => {
    const jsx = (
      <ReduxProvider store={store}>
        <StaticRouter context={context} location={req.url}>
          <Layout />
        </StaticRouter>
      </ReduxProvider>
    );
    const reactDom = renderToString(jsx);
    // grab current redux state as JSON object
    const reduxState = store.getState();

    res.writeHead(200, { "Content-Type": "text/html" });
    // write templtated string to response
    // pass in redux JSON object to be stringified in template
    res.end(htmlTemplate(reactDom, reduxState));
  });
  // render component to string
});

app.listen(2048);

// function to return a simple HTML page, interpolate react component
// require webpacke'd bundle
function htmlTemplate(reactDom, reduxState) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${reactDom}</div>
            <script>
                window.REDUX_DATA = ${JSON.stringify(reduxState)}
            </script>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
