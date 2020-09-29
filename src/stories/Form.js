import React from 'react';
import PropTypes from 'prop-types';
// import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Form = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-form--primary' : 'storybook-form--secondary';
  return (
    <form
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      <input type="text" name="name" />
    </form>
  );
};

Form.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Form contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Form.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
