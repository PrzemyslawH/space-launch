import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/media';

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
  
  @media (max-width: ${media.phone}) {
    padding: 30px;
  }
`;

const Main = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Main;