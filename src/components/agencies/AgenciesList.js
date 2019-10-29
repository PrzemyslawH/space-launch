import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataProvider';
import H2 from '../headings/H2';
import ItemSubtitle from '../ItemSubtitle';
import ListRow from '../ListRow';
import H4 from '../headings/H4';
import BigText from '../BigText';
import RowColumns from '../RowColumns';

const AgenciesList = () => {
  const items = useContext(DataContext).results;

  return (
    <ul>
      {items.map(({ id, name, country_code, founding_year }) => (
        <ListRow key={id}>
          <Link to={`/agencies/${id}`}>
            <RowColumns>
              <div>
                <H2>{name}</H2>
                <ItemSubtitle props={country_code} />
              </div>
              <div style={{ 'text-align': 'right' }}>
                {founding_year && <H4 right>Founding Year</H4>}
                <BigText right>{founding_year}</BigText>
              </div>
            </RowColumns>
          </Link>
        </ListRow>
      ))}
    </ul>
  );
};

export default AgenciesList;
