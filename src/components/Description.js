import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/colors';

const Desc = styled.span`
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: block;
  color: ${colors.light};
  font-weight: 400;
  margin-bottom: 40px;
`;

const Description = ({ children }) => {
  return <Desc>{children}</Desc>;
};

export default Description;
