/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prefer-stateless-function */
import './Calculator.css';
import React, { useState } from 'react';
import ButtonWraper from './ButtonWraper';
import Screen from './Screen';
import Button from './Button';
import calculate from '../logic/calculate';


const Calculator = () => {

  const [state, setState ] = useState({
        total: null,
        next: null,
        operation: null,
  });

  const { total, next, operation } = state;

  setNewState = (value) => {
    const newState = calculate(state, value);
        setState(newState);
  }

  handleClick = (e) => {
    const buttonName = e.target.textContent;
    setNewState(buttonName);
  };

    const btnValues = [
      ['AC', '+/-', '%', '÷'],
      [7, 8, 9, 'x'],
      [4, 5, 6, '-'],
      [1, 2, 3, '+'],
      [0, '.', '='],
    ];
    
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
                    handleClick
                  }
                />
              );
            })
          }
        </ButtonWraper>
      </div>
    );
}

export default Calculator;
