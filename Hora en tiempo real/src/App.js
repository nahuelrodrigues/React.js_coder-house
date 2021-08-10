import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log(`ComponentDidMount ${this.timerID}`);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log(`ComponentWillUnmount ${this.timerID}`);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
