import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ label, url } ) => {
  return (
    <li>
      <Link to={url}>{label}</Link>
    </li>
  );
};

export default NavItem;