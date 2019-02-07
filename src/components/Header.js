import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AppState from "./AppState";


// this component is subscribed to the redux store directly by connect
// works with mapStateToProps to spread parts of the redux store state as
// props to the component

const Header = ( { loggedIn, appState } ) => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        { loggedIn && <Link to="/secret">Secret</Link> }
        <AppState name={appState.appState} />
    </div>
);

const mapStateToProps = ( state ) => ( {
    // From react-redux docs
    // Called every time the store state changes. Receives the entire store state
    // *returns and object of whatever data this component is concerned
    // look in the reducer within the store to match up the name space
    loggedIn: state.loggedIn,
    appState: state.appState,
} );

export default connect( mapStateToProps )( Header );