import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';

const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.full_dark};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const HamburgerNav = ({ children, isOpen }) => {
  return (
    <MenuWrapper isOpen={isOpen}>
      <List>{children}</List>
    </MenuWrapper>
  );
};

export default HamburgerNav;
