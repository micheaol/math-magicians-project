/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './ButtonWraper.css';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
const ButtonWraper = () => {
  return (
    <div className="buttonBox">{props.children}</div>
  );
}

export default ButtonWraper;
