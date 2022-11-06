import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
      isSubscribe: false,
    };
  }

  changeMessage = () => {
    this.setState({
      isSubscribe: true,
      message: "Thank you for subscribing",
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>
          {this.isSubscribe ? "Unsubscribe" : "Subscribe"}
        </button>
      </>
    );
  }
}
