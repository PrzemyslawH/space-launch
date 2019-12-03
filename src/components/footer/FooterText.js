import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.4rem;
  opacity: .2;
  transition: border .2s ease-in-out;
  
  a:hover {
    border-bottom: 1px solid white;
  }
`;

const FooterText = ({ children }) => {
  return <Text>{children}</Text>;
};

export default FooterText;
