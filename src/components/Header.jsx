import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

import Brand from './Brand';

import './Header.scss';

const Header = () => {
  return (
    <Router>
      <header>
        <Brand />
        
        <nav>
          <ul>
            <li>Home</li>
            <li>Games</li>
            <li>News</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    </Router>
  )
}

export default Header
