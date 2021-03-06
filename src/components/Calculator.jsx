import './Calculator.css';
import React, { useState } from 'react';
import ButtonWraper from './ButtonWraper';
import Screen from './Screen';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next, operation } = state;

  const setNewState = (value) => {
    const newState = calculate(state, value);
    setState(newState);
  };

  const handleClick = (e) => {
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
    <div className="main-wrapper" data-testid="calculator">
      <h1>Lets do some math!</h1>
      <div className="wrapper">
        <Screen value={operation == null
          ? total || next || '0'
          : `${total} ${operation} ${next == null ? ' ' : next}`}
        />
        <ButtonWraper>
          {
            btnValues.flat().map((btn) => (
              <Button
                key={btn}
                className={btn === '=' ? 'equals' : ''}
                value={btn}
                onClick={
                    handleClick
                  }
              />
            ))
          }
        </ButtonWraper>
      </div>
    </div>
  );
};

export default Calculator;
