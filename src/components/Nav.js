import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/launches">Launches</Link>
        </li>
        <li>
          <Link to="/agencies">Agencies</Link>
        </li>
        <li>
          <Link to="/astronauts">Astronauts</Link>
        </li>
        <li>
          <Link to="/spacestations">Space Stations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
