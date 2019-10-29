import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

const Logo = () => {
  return (
    <div>
      <Link to={'/'}>
        <img src={logo} alt="Space Launch" />
      </Link>
    </div>
  );
};

export default Logo;
