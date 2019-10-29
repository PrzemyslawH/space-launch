import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataProvider';
import H2 from '../headings/H2';
import ItemSubtitle from '../ItemSubtitle';
import Image from '../Image';
import Card from '../Card';
import List from '../List';

const AstronautsList = () => {
  const items = useContext(DataContext).results;

  return (
    <List>
      {items.map(({ id, name, nationality, profile_image_thumbnail }) => (
        <li key={id}>
          <Link to={`/astronauts/${id}`}>
            <Card>
              <Image props={profile_image_thumbnail} />
              <H2>{name}</H2>
              <ItemSubtitle props={nationality} />
            </Card>
          </Link>
        </li>
      ))}
    </List>
  );
};

export default AstronautsList;
