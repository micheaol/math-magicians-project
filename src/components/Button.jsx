/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import './Button.css';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick} type="submit">
        {this.props.value}
      </button>
    );
  }
}

export default Button;
