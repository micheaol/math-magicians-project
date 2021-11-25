/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import React from 'react';
import './Button.css';

const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick} type="submit">
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
};

export default Button;
