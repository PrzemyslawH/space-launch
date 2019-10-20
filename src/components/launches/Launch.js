import React, { useContext } from 'react';

import { DataContext } from '../context/DataProvider';
import LaunchDate from '../LaunchDate';

const Launch = () => {
  const item = useContext(DataContext);

  const { name, window_start } = item;

  return (
    <div>
      <h4>{name}</h4>
      <LaunchDate upcomingLaunchDate={window_start} />
    </div>
  );
};

export default Launch;
