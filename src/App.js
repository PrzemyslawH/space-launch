import React from 'react';

import Logo from './components/Logo';
import Nav from './components/nav/Nav';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div>
          <Logo />
          <Nav />
        </div>
        <Main />
      </Router>
    </>
  );
}

export default App;
