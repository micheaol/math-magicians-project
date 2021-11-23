/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable no-const-assign */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';

import './Button.css';

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
