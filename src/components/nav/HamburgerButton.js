import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media';
import { colors } from '../../utils/colors';

const hamburgerMixin = `
  width: 100%;
  height: 2px;
  background-color: ${colors.light};
  position: absolute;
`;

const StyledHamburgerButton = styled.button`
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin: 0;
  z-index: 100;
  position: relative;

  @media (min-width: ${media.tablet}) {
    display: none;
  }
`;

const HamburgerBox = styled.span`
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const HamburgerInner = styled.span`
  ${hamburgerMixin};

  background-color: ${({ isOpen }) => (isOpen ? 'transparent' : colors.light)};
  left: 0;
  top: 50%;
  transition: background-color .2s ease-in-out;

  &::before,
  &::after {
    ${hamburgerMixin};

    transition: transform .2s ease-in-out;
    content: '';
    left: 0;
  }

  &::before {
    top: -10px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(10px) rotate(45deg)' : 'translateY(0) rotate(0)'};
  }

  &::after {
    top: 10px;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(-10px) rotate(-45deg)' : 'translateY(0) rotate(0)'};
  }
`;

const HamburgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <StyledHamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <HamburgerBox>
        <HamburgerInner isOpen={isOpen} />
      </HamburgerBox>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
