import React, { Fragment, useState, useEffect } from 'react';

import useDataFetch from 'hooks/useDataFetch';
import api from 'services/api';
import Error from 'components/Error';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination';

const AgenciesFetch = () => {
  const [{ data, isLoading, isError }, doFetch] = useDataFetch(
    { items: [], totalItems: 0 },
    api.agencies
  );
  const [offset, setOffset] = useState(0);
  const [pageLimit, setPageLimit] = useState(20);

  useEffect(() => {
    doFetch(api.agencies + `&limit=${pageLimit}&offset=${offset}`);
  }, [offset]);

  return (
    <Fragment>
      <Pagination
        totalItems={data.totalItems}
        pageLimit={pageLimit}
        handlePageNumber={setOffset}
      />

      {isError && <Error />}

      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {data.items.map((item) => (
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
