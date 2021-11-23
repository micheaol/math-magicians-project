/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
import './ButtonWraper.css';
import React, { Component } from 'react';
import Button from './Button';

class ButtonWraper extends Component {

  render() {
    const numbers = ['A/C', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

    return (
      <div className="buttonBox">
        {numbers && numbers.map((number) => <Button number={number} key={number} />)}
      </div>
    );
  }
}

export default ButtonWraper;
