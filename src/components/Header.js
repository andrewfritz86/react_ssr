import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleLogin } from "../store";
import AppState from "./AppState";

// this component is subscribed to the redux store directly by connect
// works with mapStateToProps to spread parts of the redux store state as
// props to the component

const Header = ({ loggedIn, appState, account, toggleLogin }) => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    {loggedIn && <Link to="/secret">Secret</Link>}
    <AppState name={appState.appState} />
    {account && <h3> ACCOUNT LOL</h3>}
    <button onClick={toggleLogin}>Toggle Login </button>
  </div>
);

const mapDispatchToProps = dispatch => {
  // Literally map dispatching of actions as props on the component, using connect
  // the returned handlers are available to the component
  // without this, we'd probably have to import the store, and call store.dispatch?
  return {
    toggleLogin: () => dispatch(toggleLogin())
  };
};

const mapStateToProps = state => ({
  // Map pieces of the store (keyed by state.reducer) to props made available to the component
  loggedIn: state.loggedIn,
  appState: state.appState,
  account: state.account
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
