import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};