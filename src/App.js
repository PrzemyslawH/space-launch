import React from 'react';

import Logo from './components/Logo';
import Nav from './components/nav/Nav';
import RoutingContent from './components/RoutingContent';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import TopBar from './components/TopBar';
import Main from './components/Main';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <TopBar>
          <Logo />
          <Nav />
        </TopBar>
        <Main>
          <RoutingContent />
        </Main>
      </Router>
    </>
  );
}

export default App;
