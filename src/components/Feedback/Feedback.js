import PropTypes from 'prop-types';
import { StyledDiv, StyledButton } from './Feedback.styled';

const Feedback = ({ options, onClick }) => {
  return (
    <StyledDiv>
      {options.map(option => (
        <StyledButton
          type="button"
          onClick={onClick}
          key={option}
          name={option}
        >
          {option}
        </StyledButton>
      ))}
    </StyledDiv>
  );
};

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
