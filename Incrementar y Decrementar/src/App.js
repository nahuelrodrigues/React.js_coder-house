import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  onIncrease() {
    this.setState(state => {
      return { counter: state.counter + 1 };
    });
  }

  onDecrease() {
    this.setState(state => {
      return { counter: state.counter - 1 };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrease.bind(this)}>Increase</button>
        <button onClick={this.onDecrease.bind(this)}>Decrease</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
