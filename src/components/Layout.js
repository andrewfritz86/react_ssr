import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Header from "./header";
import routes from "../routes";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Warby Parker</h1>
        <Header />
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}
