import React from 'react';
import styled from 'styled-components';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 30px;
`;

const List = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export default List;
