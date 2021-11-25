/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import './ButtonWraper.css';
import React from 'react';

const ButtonWraper = ({ children }) => {
  return (
    <div className="buttonBox">{children}</div>
  );
};

export default ButtonWraper;
