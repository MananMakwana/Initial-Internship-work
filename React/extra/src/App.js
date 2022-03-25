import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.setState({ value: 1 });
    // this.setState({ value: 2 });
    // this.setState({ value: 3 });
    // this.setState({ value: 5 });
    // this.setState({ value: 2 });

    this.timerID = setTimeout(() => {
      this.setState(() => {
        return { value: 111 };
      });
      this.setState(() => {
        return { value: 222 };
      });
      this.setState(() => {
        return { value: 333 };
      });
    }, 5000);
  }
  handleClick() {
    this.setState(() => {
      console.log("1");
      return { value: this.state.value + 1 };
    });
    this.setState(() => {
      console.log("2");
      return { value: this.state.value + 10 };
    });
    this.setState(() => {
      console.log("3");
      return { value: this.state.value + 100 };
    });
    this.setState(() => {
      console.log("4");
      return { value: this.state.value + 1000 };
    });
    this.setState(() => {
      console.log("5");
      return { value: this.state.value + 10000 };
    });
  }

  render() {
    console.log(this.state.value, "in render");
    return (
      <div>
        <h1>The value presented in state is {this.state.value}</h1>
        <button onClick={this.handleClick}>Click to change value</button>
      </div>
    );
  }
}

export default App;
