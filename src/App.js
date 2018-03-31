import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { helloWorld } from "./actions/helloWorldAction";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import HelloWorldCompo from "./components/HelloWorldCompo";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HelloWorldCompo} />
      </div>
    );
  }
}

export default App;
