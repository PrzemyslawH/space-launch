import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/media';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-row-gap: 40px;
  
  @media (max-width: ${media.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const SectionGrid = ({ children }) => {
  return <Section>{children}</Section>;
};

export default SectionGrid;
