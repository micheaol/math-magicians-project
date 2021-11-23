/* eslint-disable linebreak-style */
import './ButtonWraper.css';
import React, { Component } from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
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
