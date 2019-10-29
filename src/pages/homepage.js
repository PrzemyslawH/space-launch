import React from 'react';

import DataProvider from '../components/context/DataProvider';
import api, { order } from '../services/api';
import UpcomingLaunch from '../components/UpcomingLaunch';
import Hero from '../components/Hero';
import HeroAstronaut from '../components/HeroAstronaut';

const Homepage = () => {
  return (
    <>
      <Hero />
      <HeroAstronaut />
      <DataProvider query={api.launches.upcoming + order.by_net_ascending}>
        <UpcomingLaunch />
      </DataProvider>
    </>
  );
};

export default Homepage;
