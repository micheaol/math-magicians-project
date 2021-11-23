/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';

import './Button.css';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  render() {
    return (
      <div className="button">
        {this.props.number}
      </div>
    );
  }
}

export default Button;
