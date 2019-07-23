import React, { Fragment, useState, useEffect } from 'react';

import useDataFetch from 'hooks/useDataFetch';
import API from 'services/api';
import Error from 'components/Error';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination';

const AgenciesFetch = () => {
  const [{ data, isLoading, isError }, doFetch] = useDataFetch(
    { items: [], totalItems: 0 },
    API.agencies
  );
  const [offset, setOffset] = useState(0);
  const itemsLimit = 20;

  useEffect(() => {
    doFetch(API.agencies + `&offset=${offset}&limit=${itemsLimit}`);
  }, [offset]);

  return (
    <Fragment>
      {isError && <Error />}

      <Pagination
        totalItems={data.totalItems}
        handleOffset={setOffset}
        itemsLimit={itemsLimit}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <ul>
            {data.items.map((item) => (
              <li key={item.id}>
                <a href="/">{item.name}</a>
              </li>
            ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AgenciesFetch;
