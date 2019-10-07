import React from 'react';
import Tabs from '../components/tabs/Tabs';
import API from '../services/API';

const initialTabsData = [
  { label: 'Upcoming', content: API.launches.upcoming },
  { label: 'Previous', content: API.launches.previous },
];

const NewLaunches = () => {
  return (
    <div>
      <Tabs initialTabsData={initialTabsData} />
    </div>
  );
};

export default NewLaunches;
