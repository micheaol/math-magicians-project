import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <Router>
    <nav data-testid="nav">
      <h1>Math Magician</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/quote">Qoute</Link>
        </li>
      </ul>
    </nav>
  </Router>
);

export default Navbar;
