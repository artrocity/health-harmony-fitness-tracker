// Import 3rd Party Libraries
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function HorizontalNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Logo</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HorizontalNav;
