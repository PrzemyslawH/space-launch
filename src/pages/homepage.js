import React from 'react';

import Counter from '../components/Counter';
import DataProvider from '../components/context/DataProvider';
import api, { order } from '../services/api';

const Homepage = () => {
  return (
    <DataProvider query={api.launches.upcoming + order.by_net_ascending}>
      <Counter />
    </DataProvider>
  );
};

export default Homepage;
