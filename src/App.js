import React, { Component } from "react";
import Counters from "./components/counters.js";
import Navbar from "./components/navbar.js";
import "./App.css";

class App extends Component {
  state = {
    counters: []
  };

  handleDeleteAllCounters = () => {
    this.setState({ counters: [] });
  };

  getHeighestCounterId = () =>
    [...this.state.counters].reduce(
      (acc, curr) => (acc < curr.id ? curr.id : acc),
      0
    );

  handleAddCounter = () => {
    const counters = [...this.state.counters].concat([
      { id: this.getHeighestCounterId() + 1, value: 0 }
    ]);
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleResetCounter = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    return (
      <React.Fragment>
        <Navbar totalCounters={counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onResetCounter={this.handleResetCounter}
            onAddCounter={this.handleAddCounter}
            onDeleteAllCounters={this.handleDeleteAllCounters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
