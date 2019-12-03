import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';
import FooterText from './FooterText';
import { media } from '../../utils/media';

const Wrapper = styled.section`
  width: 100%;
  background: ${colors.medium_dark};
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Container = styled.div`
  max-width: 1200px;
  height: 140px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${media.phone}) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterText>SL © 2019 - All rights reserved</FooterText>
        <FooterText>
          designed & developed by{' '}
          <a
            href="https://github.com/PrzemyslawH"
            target="_blank"
            rel="noopener noreferrer"
          >
            astrofreak
          </a>
        </FooterText>
      </Container>
    </Wrapper>
  );
};

export default Footer;
