import React, { Component } from "react";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.isLoggedIn ? " Welcome Mehedi" : "Welcome Guest"}</h1>
        <button onClick={() => this.handleLogin()}>
          {this.state.isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}
