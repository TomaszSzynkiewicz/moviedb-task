import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

export default () => (
  <div className="header">
    <ul className="nav">
      <li>
        <NavLink exact to="/">Search</NavLink>
      </li>
    </ul>
  </div>
);
