import React from 'react';

import API from '../services/API';
import Tabs from '../components/tabs/Tabs';

const initialTabsData = [
  { label: 'Upcoming', content: API.launches.upcoming },
  { label: 'Previous', content: API.launches.previous },
];

const Launches = () => {

  return (
    <>
      <Tabs initialTabsData={initialTabsData} />
    </>
  );
};

export default Launches;
