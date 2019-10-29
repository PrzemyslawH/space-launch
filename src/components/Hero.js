import React from 'react';
import styled from 'styled-components';

import heroImage from '../assets/img/background.jpg';
import { media } from '../utils/media';

const Background = styled.div`
  width: 100%;
  height: 120vh;
  background: url(${heroImage}) top center no-repeat;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  @media (max-width: ${media.desktop}) {
    background: url(${heroImage}) center -260px no-repeat;
  }
  
  @media (max-width: ${media.phone}) {
    background: url(${heroImage}) center -160px no-repeat;
  }
`;

const Hero = () => {
  return <Background />;
};

export default Hero;
