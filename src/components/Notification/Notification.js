import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <span>{message}</span>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};