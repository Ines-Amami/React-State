import React, { Component } from "react";
import Counter from "./Components/Counter.js";

class App extends Component {
  state = { show: true };

  render() {
    return (
      <div>
     
        <br />
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "hide" : "show"}
        </button>
        {this.state.show && <Counter />}
      </div>
    );
  }
}

export default App;
