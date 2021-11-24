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
      numberOne: 0,
      numberTwo: 0,
      // operation: '+',
    };

    const calc = () => this.setState({ numberOne: () => operate() });
  }

  render() {
    const operation = [
      ['A/C', '+/-', '%', '÷'],
      [7, 8, 9, 'X'],
      [4, 5, 6, '-'],
      [1, 2, 3, '+'],
      [0, '.', '='],
    ];

    // const { numberOne, numberTwo, operation } = this.state;
    console.log(calculate());
    return (
      <div className="wrapper">
        <Screen value={this.state.numberOne ? this.state.numberOne : this.state.numberTwo} />
        <ButtonWraper>
          {
            operation.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn === '=' ? 'equals' : ''}
                  value={btn}
                  onClick={
                   console.log('I am from click')
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
