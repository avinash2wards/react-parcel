import React, { Component } from "react";

import { HelloWorld } from "./HelloWorld";

class App extends Component {
  state = {
    greet: "Hello"
  };

  render() {
    return (
      <div>
        <HelloWorld greet={this.state.greet} name={"Avinash"} />;
      </div>
    );
  }
}

export { App };
