import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../utils/colors';

const Item = styled.a`
  font-size: 1.6rem;
  margin-left: 40px;
  padding: 5px 0;
  transition: opacity 0.2s ease-in-out;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 1px;
    background: ${colors.primary};
    left: 0;
    bottom: 0;
    transition: width .2s ease-in-out;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const NavItem = ({ label, url }) => {
  return (
    <li>
      <Item as={Link} to={url}>{label}</Item>
    </li>
  );
};

export default NavItem;
