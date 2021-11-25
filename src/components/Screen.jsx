/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default Screen;
