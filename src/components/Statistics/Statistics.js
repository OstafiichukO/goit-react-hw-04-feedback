import PropTypes from 'prop-types';
import { StyledLi } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <StyledLi>Good: {good}</StyledLi>
      <StyledLi>Neutral: {neutral}</StyledLi>
      <StyledLi>Bad: {bad}</StyledLi>
      <StyledLi>Total: {total}</StyledLi>
      <StyledLi>Positive feedback: {positivePercentage}%</StyledLi>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
