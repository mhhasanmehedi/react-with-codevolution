import "./App.css";
import { Component } from "react";
import UserGreeting from "./components/UserGreeting";
// import ParentComponent from "./components/ParentComponent";
// import EventBind from "./components/EventBind";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import Counter from "./components/Counter";
// import Message from "./components/Message";
// import Great from "./components/Great";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting />
        {/* <ParentComponent />
        <EventBind />
        <FunctionClick />
        <ClassClick />
        <Counter />
        <Message />
        <Great name="Mehedi">
          <p>This is Children props</p>
        </Great>
        <Great name="Hasan">
          <button>action</button>
        </Great>
        <Great name="Rahat" />
        <Hello />
        <Welcome name="Mehedi">
          <p>This is children</p>
        </Welcome>
        <Welcome name="Hasan" />
        <Welcome name="Rahat" /> */}
      </div>
    );
  }
}

export default App;
