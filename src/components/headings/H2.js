import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;
  margin-bottom: 5px;
`;

const H2 = ({ children }) => {
  return <Title>{children}</Title>;
};

export default H2;
