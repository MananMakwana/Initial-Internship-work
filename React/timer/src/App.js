import React, { Component } from "react";
import Timer from "./oneSec.js";

class App extends Component {
  render() {
    return (
      <>
        <h1>Timer</h1>
        <Timer interval={1} />
        <Timer interval={5} />
        <Timer interval={10} />
      </>
    );
  }
}

export default App;
