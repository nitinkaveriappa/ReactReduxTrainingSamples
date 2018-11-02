import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: false
    };
  }

  decrementCounter() {
    return this.state.counter === 0
      ? this.setState({ error: true })
      : this.setState({ counter: this.state.counter - 1, error: false });
  }

  showError() {
    return (
      <div data-test="error-message">The counter value cannot go below 0</div>
    );
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {this.state.error ? this.showError() : ''}
        <button
          data-test="increment-button"
          onClick={() =>
            this.setState({ counter: this.state.counter + 1, error: false })
          }
        >
          Increment Counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => this.decrementCounter()}
        >
          Decrement Counter
        </button>
      </div>
    );
  }
}

export default App;
