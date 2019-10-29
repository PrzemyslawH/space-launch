import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';

const TabButton = styled.button`
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 1.44px;
  color: ${({ isActive }) =>
  isActive ? colors.light : colors.medium_light};
  background: ${({ isActive }) => (isActive ? colors.primary : colors.full_dark)};
  text-transform: uppercase;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${colors.light};
  }
`;

const Tab = ({ label, isActive, tabIndex, handleTabClick }) => {
  const onTabClick = () => {
    handleTabClick(tabIndex);
  };

  return (
    <TabButton isActive={isActive} onClick={onTabClick}>
      {label}
    </TabButton>
  );
};

export default Tab;