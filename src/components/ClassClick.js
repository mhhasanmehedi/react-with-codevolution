import React, { Component } from "react";

export default class ClassClick extends Component {
  handler = () => {
    console.log("click me");
  };
  render() {
    return (
      <div>
        <button onClick={this.handler}>Click me</button>
      </div>
    );
  }
}
