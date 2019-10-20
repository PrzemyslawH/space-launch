import React from 'react';
import NavItem from './NavItem';

const menuItems = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/launches',
    label: 'Launches',
  },
  {
    url: '/agencies',
    label: 'Agencies',
  },
  {
    url: '/astronauts',
    label: 'Astronauts',
  },
  {
    url: '/spacestations',
    label: 'Space Stations',
  },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {menuItems.map(({ url, label }) => (
          <NavItem key={label} url={url} label={label} />
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
