import React, { Component } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  // состояние 
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // варианты отзывов
  feedbackOptions = ['Good', 'Neutral', 'Bad'];

  //изменяет состояние от нажатия на кнопку отзыва
  onLeaveFeedback = e => {
    const option = e.currentTarget.innerText.toLowerCase();
    return this.setState({ [option]: this.state[option] + 1 });
  };

  //подитывает общее количество отзывов
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
  };

  // подщитывает процент положительных отзывов от общего количества
  countPositiveFeedbackPercentage = () => {
    return (100 / this.countTotalFeedback()) * this.state.good;
  };

  // делает разметку
  render() {
    // передаем функции для статистики
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    // делаем разметку
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback
            options={this.feedbackOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={Math.round(positivePercentage)}
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
