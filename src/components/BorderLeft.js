import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/colors';

const Wrapper = styled.div`
  padding-left: 40px;
  border-left: 1px solid ${colors.primary};
`;

const BorderLeft = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BorderLeft;
