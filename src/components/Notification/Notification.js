import PropTypes from 'prop-types';
import { StyledDiv } from './Notification.styled';

const Notification = ({ message }) => {
  return <StyledDiv>{message}</StyledDiv>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
