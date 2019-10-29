import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.li`
  font-size: 2.4rem;
  text-align: center;
  padding: 30px 0;
`;

const HamburgerNavItem = ({ label, url, setIsOpen }) => {
  return (
    <Item>
      <Link to={url} onClick={() => setIsOpen(false)}>{label}</Link>
    </Item>
  );
};

export default HamburgerNavItem;
