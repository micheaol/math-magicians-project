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
    const { count } = this.state;
    return (
      <div className="wrapper">
        <Screen count={count} />
        <ButtonWraper handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
