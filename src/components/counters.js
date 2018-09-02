import React, { Component } from "react";
import Counter from "./counter";
import "./../index.css";

class Counters extends Component {
  showCounters = () => {
    const { counters } = this.props;
    if (counters.length === 0) {
      return "No counter avilable";
    }

    return counters.map(counter => (
      <Counter
        key={counter.id}
        counter={counter}
        onDelete={this.props.onDelete}
        onIncrement={this.props.onIncrement}
        onDecrement={this.props.onDecrement}
      />
    ));
  };
  render() {
    return (
      <div>
        <button
          onClick={this.props.onAddCounter}
          className="btn btn-sm btn-primary m-2"
        >
          Add Counter
        </button>
        <div className={this.getResetButtonClass()}>
          <button
            onClick={this.props.onDeleteAllCounters}
            className="btn btn-sm btn-primary m-2"
          >
            Delete All Counters
          </button>
          <button
            onClick={this.props.onResetCounter}
            className="btn btn-sm btn-primary m-2"
          >
            Reset
          </button>
        </div>
        {this.showCounters()}
      </div>
    );
  }

  getResetButtonClass() {
    let classes = "inner ";
    classes += this.props.counters.length === 0 ? "hideDiv" : "";
    return classes;
  }
}

export default Counters;
