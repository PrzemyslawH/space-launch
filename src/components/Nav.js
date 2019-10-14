import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Launches from '../pages/Launches';
import NotFound from '../pages/NotFound';
import Astronauts from '../pages/Astronauts';
import Agencies from '../pages/Agencies';
import SpaceStations from '../pages/SpaceStations';

const Nav = () => {
  return (
    <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/launches">Launches</Link></li>
            <li><Link to="/agencies">Agencies</Link></li>
            <li><Link to="/astronauts">Astronauts</Link></li>
            <li><Link to="/spacestations">Space Stations</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/launches" component={Launches} />
          <Route path="/agencies" component={Agencies} />
          <Route path="/astronauts" component={Astronauts} />
          <Route path="/spacestations" component={SpaceStations} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
};

export default Nav;