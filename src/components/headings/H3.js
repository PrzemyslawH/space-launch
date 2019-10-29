import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 1.8rem;
  line-height: 1.8rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-weight: 400;
`;

const H3 = ({ children }) => {
  return <Title>{children}</Title>;
};

export default H3;
