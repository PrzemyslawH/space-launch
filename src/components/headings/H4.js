import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';

const Title = styled.h4`
  font-size: 1rem;
  line-height: 1rem;
  color: ${({primary}) => primary ? colors.primary : colors.medium_light};
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 5px;
`;

const H4 = ({ primary, children }) => {
  return <Title primary={primary}>{children}</Title>;
};

export default H4;
