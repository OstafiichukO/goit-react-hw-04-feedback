import React, { Component } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodIncrement = () =>
    this.setState({
      good: this.state.good + 1,
    });

  onNeutralIncrement = () =>
    this.setState({
      neutral: this.state.neutral + 1,
    });

  onBadIncrement = () =>
    this.setState({
      bad: this.state.bad + 1,
    });

  countTotalFeedback = () => {
    return Object.values(this.state);
  };

  render() {
    return <Feedback />;
  }
}

export default App;
