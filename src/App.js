import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Logo from './components/Logo';
import HomePage from './pages/HomePage';
import LaunchesPage from './pages/LaunchesPage';
import AgenciesPage from './pages/AgenciesPage';
import AstronautsPage from './pages/AstronautsPage';
import SpaceStationsPage from './pages/SpaceStationsPage';
import NotFoundPage from './pages/NotFoundPage';
import SingleSpaceStationPage from './pages/SingleSpaceStationPage';
import SingleLaunchPage from './pages/SingleLaunchPage';
import SingleAstronautPage from './pages/SingleAstronautPage';
import SingleAgencyPage from './pages/SingleAgencyPage';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Logo />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/launches" component={LaunchesPage} />
          <Route path="/launches/:id" component={SingleLaunchPage} />
          <Route exact path="/agencies" component={AgenciesPage} />
          <Route path="/agencies/:id" component={SingleAgencyPage} />
          <Route exact path="/astronauts" component={AstronautsPage} />
          <Route path="/astronauts/:id" component={SingleAstronautPage} />
          <Route exact path="/spacestations" component={SpaceStationsPage} />
          <Route path="/spacestations/:id" component={SingleSpaceStationPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
