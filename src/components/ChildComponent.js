import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.greetHandler("Child")}>
          Greet Parent
        </button>
      </div>
    );
  }
}

export default ChildComponent;
