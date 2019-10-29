import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.4rem;
  opacity: 0.2;
`;

const FooterText = ({ children }) => {
  return <Text>{children}</Text>;
};

export default FooterText;
