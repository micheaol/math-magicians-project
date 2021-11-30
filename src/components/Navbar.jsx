import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
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
      <li><Link to="/quote">Qoute</Link></li>
    </ul>
  </nav>
);

export default Navbar;
