import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/colors';

const Text = styled.span`
  font-size: 2.4rem;
  line-height: 3.6rem;
  display: block;
  color: ${colors.light};
  font-weight: 400;
  margin-bottom: 40px;
`;

const Info = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Info;
