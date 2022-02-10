import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () =>
    this.setState({
      good: this.state.good + 1,
    });

  neutralIncrement = () =>
    this.setState({
      neutral: this.state.neutral + 1,
    });

  badIncrement = () =>
    this.setState({
      bad: this.state.bad + 1,
    });

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <div>
          <button type="button" onClick={this.goodIncrement}>
            Good
          </button>
          <button type="button" onClick={this.neutralIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.badIncrement}>
            Bad
          </button>
        </div>
        <p>Statistics</p>
        <ul>
          <li>
            Good:<span>{this.state.good}</span>
          </li>
          <li>
            Neutral:<span>{this.state.neutral}</span>
          </li>
          <li>
            Bad:<span>{this.state.bad}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
