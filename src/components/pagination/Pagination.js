import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  ul {
    display: flex;
    justify-content: center;

    li {
      height: 36px;
      width: 36px;
      margin: 60px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
    }
  }
`;

const Pagination = ({ children }) => {
  return <PaginationWrapper>{children}</PaginationWrapper>;
};

export default Pagination;
