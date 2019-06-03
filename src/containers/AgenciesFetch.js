import React, { Fragment } from 'react';

import useDataFetch from 'hooks/useDataFetch';
import api from 'services/api';

const AgenciesFetch = () => {
  const [{ data, isLoading, isError }, doFetch] = useDataFetch(
    { items: [], count: 0 },
    api.agencies
  );

  return (
    <Fragment>
      {console.log(data.items.length, data.count)}

      {isError && <div>Houston, we have a problem</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.items.map(item => (
            <li key={item.id}>
              <a href="/">{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default AgenciesFetch;
