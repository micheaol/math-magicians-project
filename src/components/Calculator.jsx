/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
import './Calculator.css';
import React, { Component } from 'react';
import ButtonWraper from './ButtonWraper';
import Screen from './Screen';

class Calculator extends Component {
  render() {
    return (
      <div className="wrapper">
        <Screen />
        <ButtonWraper />
      </div>
    );
  }
}

export default Calculator;
