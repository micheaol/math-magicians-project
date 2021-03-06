import PropTypes from 'prop-types';
import React from 'react';
import './Button.css';

const Button = ({ className, value, onClick }) => (
  <button className={className} onClick={onClick} type="submit" data-testid="button">
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
};

export default Button;
