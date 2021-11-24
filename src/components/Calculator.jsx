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
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
       count: 0,
    };

    this.handleClick = () => this.setState({ count: this.state.count + 1 });
  }

  render() {
    // const numbers = ['A/C', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', ' 2', '3', '+', '0', '.', '='];

    const btnValues = [
      ['A/C', '+/-', '%', '÷'],
      [7, 8, 9, 'X'],
      [4, 5, 6, '-'],
      [1, 2, 3, '+'],
      [0, '.', '='],
    ];
    // changeCount();
    // const { count } = this.state;
    return (
      <div className="wrapper">
        <Screen value="0" />
        <ButtonWraper>
          {
            btnValues.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn === '=' ? 'equals' : ''}
                  value={btn}
                  onClick={() => {
                    console.log(`${btn} clicked!`);
                  }}
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
