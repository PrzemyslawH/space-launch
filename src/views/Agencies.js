import React, { Fragment, useState, useEffect } from 'react';

import useDataFetch from 'hooks/useDataFetch';
import API, { offset, limit } from 'services/API';
import Error from 'components/Error';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination';

const Agencies = () => {
  const [{ data, isLoading, isError }, doFetch] = useDataFetch(
    { items: [], totalItems: 0 },
    API.agencies
  );
  const [itemsOffset, setItemsOffset] = useState(0);
  const itemsLimit = 20;

  useEffect(() => {
    doFetch(API.agencies + offset(itemsOffset) + limit(itemsLimit));
  }, [itemsOffset]);

  return (
    <Fragment>
      {isError && <Error />}

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

      <Pagination
        totalItems={data.totalItems}
        handleOffset={setItemsOffset}
        itemsLimit={itemsLimit}
      />
    </Fragment>
  );
};

export default Agencies;
