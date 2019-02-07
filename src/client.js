
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";

import Layout from "./components/Layout";

// this is the file used as the entry point for webpack bundle
// hook client-side react up with server side markup
// use hydrate instead of render.

const jsx = (
    <Router>
        <Layout />
    </Router>
)
const app = document.getElementById( "app" );
ReactDOM.hydrate( jsx, app );