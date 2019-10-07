import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Agencies from '../pages/Agencies';
import Launches from '../pages/Launches';
import NotFound from '../pages/NotFound';

const Nav = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/launches">Launches</Link></li>
            <li><Link to="/agencies">Agencies</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/agencies" component={Agencies} />
          <Route path="/launches" component={Launches} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;