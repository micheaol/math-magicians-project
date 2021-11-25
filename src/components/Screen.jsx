/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import './Screen.css';

const Screen = ({ value }) => {
  return (
    <div className="screen">
      <h1>{value}</h1>
    </div>
  );
};

export default Screen;
