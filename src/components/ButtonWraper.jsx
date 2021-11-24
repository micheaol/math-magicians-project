/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import './ButtonWraper.css';
import React, { Component } from 'react';
// import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonWraper extends Component {
  render() {
    return (
      <div className="buttonBox">{this.props.children}</div>
    );
  }
}

export default ButtonWraper;
