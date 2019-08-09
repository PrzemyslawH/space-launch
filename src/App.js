import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from 'views/Home';
import Launches from 'views/Launches';
import AgenciesView from 'views/Agencies';
import NotFound from 'views/NotFound';

function App() {
  return (
    <div>
      <h1>Space-launch app is coming...</h1>
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
            <Route path="/agencies" component={AgenciesView} />
            <Route path="/launches" component={Launches} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
