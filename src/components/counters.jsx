import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDecrement, onDelete, counters } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-warning btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <h4>Item {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
