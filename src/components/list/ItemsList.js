import React, { useEffect, useState } from 'react';
import useDataFetch from '../../hooks/useDataFetch';
import { offset } from '../../services/API';

import Items from './Items';
import Loading from '../Loading';
import Error from '../Error';
import Pagination from '../Pagination';

const ItemsList = ({ query }) => {
  const [{ data, isLoading, isError }, doFetch] = useDataFetch(
    { items: [], totalItems: 0 },
    query
  );
  const [itemsOffset, setItemsOffset] = useState(0);

  useEffect(() => {
    doFetch(query + offset(itemsOffset));
  }, [itemsOffset, query]);

  return (
    <div>
      {isError && <Error />}

      {isLoading ? <Loading /> : <Items items={data.items} />}

      <Pagination
        totalItems={data.totalItems}
        handleOffset={setItemsOffset}
        itemsLimit={20}
      />
    </div>
  );
};

export default ItemsList;
