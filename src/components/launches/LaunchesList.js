import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataProvider';
import H2 from '../headings/H2';
import ItemSubtitle from '../ItemSubtitle';
import LaunchDate from '../LaunchDate';
import ListRow from '../ListRow';
import RowColumns from '../RowColumns';
import H4 from '../headings/H4';
import BigText from '../BigText';

const LaunchesList = () => {
  const items = useContext(DataContext).results;

  return (
    <ul>
      {items.map(({ id, name, pad, net }) => (
        <ListRow key={id}>
          <Link to={`/launches/${id}`}>
            <RowColumns>
              <div>
                <H2>{name}</H2>
                <ItemSubtitle props={pad.location.name} />
              </div>
              <div>
                {net && <H4>Launch date</H4>}
                <BigText>
                  <LaunchDate upcomingLaunchDate={net} />
                </BigText>
              </div>
            </RowColumns>
          </Link>
        </ListRow>
      ))}
    </ul>
  );
};

export default LaunchesList;
