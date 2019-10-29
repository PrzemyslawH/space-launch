import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/colors';

const CardWrapper = styled.div`
  padding: 30px;
  height: 100%;
  background: ${colors.medium_dark};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px ${colors.shadow};
  }
`;

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
