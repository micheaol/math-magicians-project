/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick} type="submit">
      {value}
    </button>
  );
};

export default Button;
