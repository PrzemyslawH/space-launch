import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataProvider';
import ItemTitle from '../ItemTitle';
import ItemSubtitle from '../ItemSubtitle';
import Image from '../Image';

const SpaceStationsList = () => {
  const items = useContext(DataContext).results;

  return (
    <ul>
      {items.map(({ id, name, status, image_url }) => (
        <li key={id}>
          <Link to={`/spacestations/${id}`}>
            <ItemTitle props={name} />
            <ItemSubtitle props={status.name} />
            <Image props={image_url} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SpaceStationsList;
