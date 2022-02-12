import PropTypes from 'prop-types';
import { StyledDiv, StyledButton } from './Feedback.styles';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <StyledDiv>
      {options.map(option => (
        <StyledButton type="button" onClick={onLeaveFeedback} key={option}>
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
