import React from "react";
import {Link, Switch, Route} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Secret from "./secret";
import Header from "./header";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Testing REACT SSR",
        };
    }

    render() {
        console.log("Shmee layou", this.props)
        return (
            <div>
                <h1>{ this.state.title }</h1>
                <Header />
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/about" exact component={ About } />
                    <Route path="/contact" exact component={ Contact} />
                    <Route path="/secret" exact component={ Secret } />
                </Switch>
            </div>
        );
    }
}