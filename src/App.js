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

  onGoodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onNeutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onBadIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return (100 / this.countTotalFeedback()) * this.state.good;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback
            onGoodIncrement={this.onGoodIncrement}
            onNeutralIncrement={this.onNeutralIncrement}
            onBadIncrement={this.onBadIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            feedback={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
