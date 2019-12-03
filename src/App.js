import React from 'react';

import Logo from './components/Logo';
import Nav from './components/nav/Nav';
import RoutingContent from './components/RoutingContent';
import GlobalStyle from './components/GlobalStyle';
import TopBar from './components/TopBar';
import Main from './components/Main';
import Footer from './components/footer/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr auto;
`;

function App() {
  return (
    <Wrapper>
      <div>
        <GlobalStyle />
        <TopBar>
          <Logo />
          <Nav />
        </TopBar>
        <Main>
          <RoutingContent />
        </Main>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default App;
