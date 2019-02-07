import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Layout from "./components/Layout";

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    // reference react component
    const context = {};
    const jsx = ( 
        <StaticRouter context={context} location={req.url}>
            <Layout />
        </StaticRouter>
    );
    // render component to string
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    // write templtated string to response
    res.end( htmlTemplate( reactDom ) );
} );

app.listen( 2048 );

// function to return a simple HTML page, interpolate react component
// require webpacke'd bundle
function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}