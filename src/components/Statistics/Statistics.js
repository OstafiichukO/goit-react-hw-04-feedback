const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {feedback}%</li>
    </ul>
  );
};

export default Statistics;
