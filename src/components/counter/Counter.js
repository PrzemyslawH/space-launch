import React from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  margin: 20px 0 40px 0;
  
  div {
    margin-right: 10px;
    
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Counter = ({ children }) => {
  return <CounterWrapper>{children}</CounterWrapper>;
};

export default Counter;
