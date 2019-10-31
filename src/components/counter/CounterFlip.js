import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';

const Wrapper = styled.div`
  min-width: 70px;
`;

const FlipWrapper = styled.div`
  width: 100%;
  height: 80px;
  font-size: 3.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 5px;
  padding: 0 5px;
  background: ${colors.regular_dark};
`;

const LabelWrapper = styled.span`
  display: block;
  font-size: 1rem;
  text-align: center;
  color: ${colors.medium_light};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

const CounterFlip = ({ label = 'days', value = '0' }) => {
  return (
    <Wrapper>
      <FlipWrapper>{value}</FlipWrapper>
      <LabelWrapper>{label}</LabelWrapper>
    </Wrapper>
  );
};

export default CounterFlip;