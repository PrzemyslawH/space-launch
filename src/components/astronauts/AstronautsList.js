import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataProvider';
import ItemTitle from '../ItemTitle';
import ItemSubtitle from '../ItemSubtitle';
import Image from '../Image';

const AstronautsList = () => {
  const items = useContext(DataContext).results;

  return (
    <ul>
      {items.map(({ id, name, nationality, profile_image }) => (
        <li key={id}>
          <Link to={`/astronauts/${id}`}>
            <ItemTitle props={name} />
            <ItemSubtitle props={nationality} />
            <Image props={profile_image} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AstronautsList;
