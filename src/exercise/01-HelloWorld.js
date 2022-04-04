import React from "react";

/**
 *🏆
 * The goal here is just to say Hello World.
 * Follow the instruction inside return statement
 */
function HelloWorld(props) {
  return React.createElement("div", null, "Hello World");
}

/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component and
 * the output of this code is displayed on the browser
 */
const Usage = (props) => {
  return <HelloWorld />;
};

export default Usage;
