/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-nested-ternary */
/* eslint-disable linebreak-style */
/* eslint-disable no-sequences */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
import './Calculator.css';
import React, { Component } from 'react';
import ButtonWraper from './ButtonWraper';
import Screen from './Screen';
import Button from './Button';
import operate from '../logic/operate';
import calculate from '../logic/calculate';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  setNewState = (value) => {
    const newState = calculate(this.state, value);
    console.log(newState);
    this.setState(newState);
  }

  handleClick = (e) => {
     const buttonName = e.target.textContent;
     this.setNewState(buttonName);
  }

  render() {
    const btnValues = [
      ['AC', '+/-', '%', '÷'],
      [7, 8, 9, 'x'],
      [4, 5, 6, '-'],
      [1, 2, 3, '+'],
      [0, '.', '='],
    ];
      const { total, next, operation } = this.state;
    return (
      <div className="wrapper">
        <Screen value={operation == null
            ? total || next || '0'
            : `${total} ${operation} ${next == null ? ' ' : next}`}
        />
        <ButtonWraper>
          {
            btnValues.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn === '=' ? 'equals' : ''}
                  value={btn}
                  onClick={
                    this.handleClick
                  }
                />
              );
            })
          }
        </ButtonWraper>
      </div>
    );
  }
}

export default Calculator;
