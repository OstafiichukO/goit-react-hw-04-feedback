import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Feedback from './components/Counter/Feedback/Feedback';
import Statistics from './components/Counter/Statistics/Statistics';
import Section from './components/Counter/Section/Section';
import Notification from './components/Counter/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
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
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback
            onIncrementGood={this.handleIncrementGood}
            onIncrementNeutral={this.handleIncrementNeutral}
            onIncrementBad={this.handleIncrementBad}
            onTotal={this.countTotalFeedback}
            posFeed={this.countPositiveFeedbackPercentage}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
