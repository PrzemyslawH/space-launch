import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataProvider';
import H2 from '../headings/H2';
import ItemSubtitle from '../ItemSubtitle';
import Image from '../Image';
import Card from '../Card';
import List from '../List';

const SpaceStationsList = () => {
  const items = useContext(DataContext).results;

  return (
    <List>
      {items.map(({ id, name, status, image_url }) => (
        <li key={id}>
          <Link to={`/spacestations/${id}`}>
            <Card>
              <Image props={image_url} />
              <H2>{name}</H2>
              <ItemSubtitle props={status.name} />
            </Card>
          </Link>
        </li>
      ))}
    </List>
  );
};

export default SpaceStationsList;
