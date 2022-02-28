import { useState } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

const OPTIONS = ['good', 'neutral', 'bad'];

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = (() => good + neutral + bad)();

  const positivePercentage = (() =>
    total ? Math.round((good / total) * 100) : 0)();

  const onLeaveFeedback = event => {
    const name = event.target.name;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback options={OPTIONS} onClick={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
