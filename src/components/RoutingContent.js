import React from 'react';
import { Route, Switch } from 'react-router-dom';

import homepage from '../pages/homepage';
import launches from '../pages/launches';
import singleLaunch from '../pages/singleLaunch';
import agencies from '../pages/agencies';
import singleAgency from '../pages/singleAgency';
import astronauts from '../pages/astronauts';
import singleAstronaut from '../pages/singleAstronaut';
import spaceStations from '../pages/spaceStations';
import singleSpaceStation from '../pages/singleSpaceStation';
import error404 from '../pages/error404';

const RoutingContent = () => {
  return (
    <Switch>
      <Route exact path="/" component={homepage} />
      <Route exact path="/launches" component={launches} />
      <Route exact path="/launches/:id" component={singleLaunch} />
      <Route exact path="/agencies" component={agencies} />
      <Route exact path="/agencies/:id" component={singleAgency} />
      <Route exact path="/astronauts" component={astronauts} />
      <Route exact path="/astronauts/:id" component={singleAstronaut} />
      <Route exact path="/spacestations" component={spaceStations} />
      <Route exact path="/spacestations/:id" component={singleSpaceStation} />
      <Route exact path="*" component={error404} />
    </Switch>
  );
};

export default RoutingContent;