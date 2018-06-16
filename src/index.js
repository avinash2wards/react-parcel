import React from "react";
import { render } from "react-dom";
import { App } from "./app/App";

const mountNode = document.querySelector("#app");

render(<App />, mountNode);
