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
    <Link to="/"> Home </Link>
    <Link to="/nearby-stores"> Nearby Stores </Link>
    {account && <Link to="/account"> Account </Link>}
    <AppState name={appState.appState} />
    <button onClick={toggleLogin} children={account ? "Log out" : "Log in"} />
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
