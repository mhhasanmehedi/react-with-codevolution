import "./App.css";
import { Component } from "react";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Mehedi">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
