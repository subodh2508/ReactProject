import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, counter, onDecrement, onDelete } = this.props;

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-sm btn-secondary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-sm btn-secondary m-2"
          disabled={!counter.value}
        >
          Decrement
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount = () =>
    this.props.counter.value ? this.props.counter.value : "Zero";

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
