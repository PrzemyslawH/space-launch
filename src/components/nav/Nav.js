import React, { useState } from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media';
import NavItem from './NavItem';
import HamburgerButton from './HamburgerButton';
import HamburgerNav from './HamburgerNav';
import HamburgerNavItem from './HamburgerNavItem';

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

const NavList = styled.ul`
  display: flex;

  @media (max-width: ${media.tablet}) {
    display: none;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <NavList>
        {menuItems.map(({ url, label }) => (
          <NavItem key={label} url={url} label={label} />
        ))}
      </NavList>
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <HamburgerNav isOpen={isOpen}>
        {menuItems.map(({ url, label }) => (
          <HamburgerNavItem key={label} url={url} label={label} setIsOpen={setIsOpen} />
        ))}
      </HamburgerNav>
    </nav>
  );
};

export default Nav;
