import React from 'react';
import styled from 'styled-components';

import puff from '../assets/img/puff.svg'
import { colors } from '../utils/colors';

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: ${colors.medium_dark};
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: .8;
  z-index: 100;
`;

const Loading = () => {
  return (
    <Loader>
      <img src={puff} alt={'Loading spinner'} />
    </Loader>
  );
};

export default Loading;
