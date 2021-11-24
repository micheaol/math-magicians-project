/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {
  render() {
    return (
      <div className="screen">
          <h1>{this.props.count}</h1>
      </div>
    );
  }
}

export default Screen;
