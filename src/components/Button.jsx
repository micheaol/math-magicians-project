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
      <button className="button" onClick={() => this.props.handleClick()} name={this.props.number} type="submit">
        {this.props.number}
      </button>
    );
  }
}

export default Button;
