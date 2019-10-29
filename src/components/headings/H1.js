import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-weight: 400;
  letter-spacing: 4.8px;
  text-transform: uppercase;
  margin-bottom: 45px;
`;

const H1 = ({ children }) => {
  return <Heading>{children}</Heading>;
};

export default H1;
