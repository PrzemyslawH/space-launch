import React from 'react';
import styled from 'styled-components';

import astronaut from '../assets/img/astronaut.png';
import { media } from '../utils/media';

const Astronaut = styled.div`
  width: 100%;
  margin-bottom: 120px;

  @media (max-width: ${media.desktop}) {
    margin-bottom: 50px;
  }

  img {
    max-width: 100%;
    animation: slide-top 2s ease-out forwards;
    display: block;
    margin: 0 auto;

    @media (max-width: ${media.desktop}) {
      max-width: 60%;
    }

    @media (max-width: ${media.phone}) {
      max-width: 100%;
    }

    @keyframes slide-top {
      0% {
        transform: translateY(50px);
        opacity: 0;
      }
      50% {
        transform: translateY(50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;

const HeroAstronaut = () => {
  return (
    <Astronaut>
      <img src={astronaut} alt={'an Astronaut'} />
    </Astronaut>
  );
};

export default HeroAstronaut;
