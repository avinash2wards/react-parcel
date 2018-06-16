import React from "react";

const HelloWorld = props => {
  let center = {
    display: "table",
    margin: "0 auto"
  };

  return (
    <h1 style={center}>
      {props.greet}, {props.name}{" "}
    </h1>
  );
};

export { HelloWorld };
