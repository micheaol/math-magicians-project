import PropTypes from 'prop-types';
import './ButtonWraper.css';
import React from 'react';

const ButtonWraper = ({ children }) => (
  <div className="buttonBox" data-testid="button-wraper">{children}</div>
);

ButtonWraper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonWraper;
