import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button type="button" onClick={onLeaveFeedback} key={option}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};