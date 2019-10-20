import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataProvider';
import ItemTitle from '../ItemTitle';
import ItemSubtitle from '../ItemSubtitle';
import Image from '../Image';

const AgenciesList = () => {
  const items = useContext(DataContext).results;

  return (
    <ul>
      {items.map(({ id, name, country_code, image_url }) => (
        <li key={id}>
          <Link to={`/agencies/${id}`}>
            <ItemTitle props={name} />
            <ItemSubtitle props={country_code} />
            <Image props={image_url} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AgenciesList;
