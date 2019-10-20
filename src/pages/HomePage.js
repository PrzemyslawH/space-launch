import React from 'react';

import Counter from '../components/Counter';
import DataProvider from '../components/context/DataProvider';
import API, { order } from '../services/API';

const HomePage = () => {
  return (
    <DataProvider query={API.launches.upcoming + order.by_net_ascending}>
      <Counter />
    </DataProvider>
  );
};

export default HomePage;
