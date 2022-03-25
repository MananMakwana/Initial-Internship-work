import React, { Component } from "react";

class oneSec extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    // console.log(new Date().toLocaleTimeString());
    this.setState({ fixed: new Date() });
    this.timerID = setInterval(() => this.tick(), this.props.interval * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return <h2>{this.state.date.toLocaleTimeString()}</h2>;
  }
}

export default oneSec;
