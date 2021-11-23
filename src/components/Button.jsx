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
        const numbers = [1, 2, 3, 5, 6];
        return (
            <div className="button">{numbers}</div>
            );
    }
}

export default Button;
