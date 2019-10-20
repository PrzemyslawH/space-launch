import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataProvider';
import ItemTitle from '../ItemTitle';
import ItemSubtitle from '../ItemSubtitle';
import LaunchDate from '../LaunchDate';

const LaunchesList = () => {
  const items = useContext(DataContext).results;

  return (
    <ul>
      {items.map(({ id, name, pad, net }) => (
        <li key={id}>
          <Link to={`/launches/${id}`}>
            <ItemTitle props={name} />
            <ItemSubtitle props={pad.location.name} />
            <LaunchDate upcomingLaunchDate={net} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LaunchesList;
