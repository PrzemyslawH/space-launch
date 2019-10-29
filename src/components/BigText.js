import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/media';

const Text = styled.span`
  font-size: 3rem;
  line-height: 4.5rem;
  display: flex;
  
  @media (max-width: ${media.phone}) {
    line-height: 3rem;
  }
`;

const BigText = ({ children }) => {
  return <Text>{children}</Text>;
};

export default BigText;
