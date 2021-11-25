import PropTypes from 'prop-types';
import React from 'react';
import './Screen.css';

const Screen = ({ value }) =>
  (
    <div className="screen">
      <h1>{value}</h1>
    </div>
  );

Screen.propTypes = {
  value: PropTypes.node.isRequired,
};

export default Screen;
