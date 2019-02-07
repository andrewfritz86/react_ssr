
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { Provider as ReduxProvider} from "react-redux";


import Layout from "./components/Layout";
import createStore from "./store";

// window.REDUX_DATA is a serialized JSON object, we can create a redux store from it
const store = createStore( window.REDUX_DATA);

// this is the file used as the entry point for webpack bundle
// hook client-side react up with server side markup
// use hydrate instead of render.

const jsx = (
    <ReduxProvider store={store}>
        <Router>
            <Layout />
        </Router>
    </ReduxProvider>
)
const app = document.getElementById( "app" );
ReactDOM.hydrate( jsx, app );