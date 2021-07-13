import React, { Component } from "react";
class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.increment = this.increment.bind(this);
  //   }
  style = {
    fontSize: 15,
    fontFamily: "cursive",
  };
  buttonstyle = {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-dark btn-sm m-2"
        >
          +
        </button>
        <span className={this.getBadgeClasses()}>{this.printvalue()}</span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-dark btn-sm m-2 "
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br></br>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "danger" : "primary";
    return classes;
  }

  printvalue() {
    const { value } = this.props.counter;
    const element = <label className="">Zero</label>;
    return value === 0 ? element : value;
  }
}
export default Counter;
