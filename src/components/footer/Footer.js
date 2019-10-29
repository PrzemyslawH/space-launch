import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';
import FooterText from './FooterText';

const Wrapper = styled.section`
  width: 100%;
  background: ${colors.full_dark};
`;

const Container = styled.div`
  max-width: 1200px;
  height: 140px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterText>SL © 2019 - All rights reserved</FooterText>
        <FooterText>designed & developed by astrofreak</FooterText>
      </Container>
    </Wrapper>
  );
};

export default Footer;
