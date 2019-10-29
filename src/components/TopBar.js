import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/media';

const Wrapper = styled.section`
  max-width: 1200px;
  height: 140px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${media.desktop}) {
    height: 80px;
  }
`;

const TopBar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default TopBar;
