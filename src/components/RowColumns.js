import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/media';

const RowColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${media.phone}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const RowColumns = ({ children }) => {
  return <RowColumn>{children}</RowColumn>;
};

export default RowColumns;
