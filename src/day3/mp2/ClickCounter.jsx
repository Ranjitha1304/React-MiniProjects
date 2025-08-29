import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    // state initialization
    this.state = {
      count: 0
    };
  }

  // method to increment count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const style = {
      textAlign: "center",
      marginTop: "20px",
      fontFamily: "Arial, sans-serif"
    };

    const buttonStyle = {
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#2a5d9f",
      color: "white",
      marginTop: "10px"
    };

    return (
      <div style={style}>
        <h3>Click Counter</h3>
        <p>Count: {this.state.count}</p>
        <button style={buttonStyle} onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClickCounter;
