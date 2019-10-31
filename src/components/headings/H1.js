import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media';

const Heading = styled.h1`
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-weight: 400;
  letter-spacing: 4.8px;
  text-transform: uppercase;
  margin-bottom: 45px;

  @media (max-width: ${media.desktop}) {
    margin-bottom: 20px;
  }
`;

const H1 = ({ children }) => {
  return <Heading>{children}</Heading>;
};

export default H1;
