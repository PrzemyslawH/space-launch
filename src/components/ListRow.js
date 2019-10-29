import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const Row = styled.li`
  padding: 45px 0;
  border-bottom: 1px solid ${colors.light_dark};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ListRow = ({ children }) => {
  return <Row>{children}</Row>;
};

export default ListRow;
