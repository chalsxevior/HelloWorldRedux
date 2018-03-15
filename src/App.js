import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { helloWorld } from "./actions/helloWorldAction";
import { connect } from "react-redux";

class App extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.helloWorld();
    console.log(this.props);
    this.setState({
      xxx: "www"
    });
  }

  render() {
    const { appX } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{appX}</h1>
        </header>
        <h4>Simple Redux Example with storing value to store</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    appX: state.name
  };
};

export default connect(mapStateToProps, {
  helloWorld
})(App);
