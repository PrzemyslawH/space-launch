import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: 1rem;
  display: flex;
  justify-content: ${(right) => (right ? 'right' : 'left')};
`;

const SmallText = ({ children }) => {
  return <Text>{children}</Text>;
};

export default SmallText;
