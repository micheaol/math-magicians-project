/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './ButtonWraper.css';
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonWraper extends Component {
  render() {
    return (
      <div className="buttonBox">{this.props.children}</div>
    );
  }
}

export default ButtonWraper;
