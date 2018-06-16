import React, { Component } from "react";

import { HelloWorld } from "./HelloWorld";
import elephant from "./img/elephant.gif";

class App extends Component {
  state = {
    greet: "Hello"
  };

  render() {
    let center = {
      display: "table",
      margin: "0 auto"
    };
    return (
      <div>
        <HelloWorld greet={this.state.greet} name={"Avinash"} />;
        <img style={center} src={elephant} alt="elephant" />
      </div>
    );
  }
}

export { App };
