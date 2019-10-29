import React, { useState, useEffect } from 'react';

import LaunchesList from '../components/launches/LaunchesList';
import DataProvider from '../components/context/DataProvider';
import api, { offset, order } from '../services/api';
import PaginationContainer from '../components/pagination/PaginationContainer';
import Tabs from '../components/tabs/Tabs';
import H1 from '../components/headings/H1';
import Pagination from '../components/pagination/Pagination';
import BorderLeft from '../components/BorderLeft';

const initialTabsData = [
  {
    label: 'Upcoming',
    content: api.launches.upcoming + order.by_net_ascending,
  },
  {
    label: 'Previous',
    content: api.launches.previous + order.by_net_descending,
  },
];

const Launches = () => {
  const [itemsOffset, setItemsOffset] = useState(0);
  const [query, setQuery] = useState(initialTabsData[0].content);

  useEffect(() => {
    setQuery(query + offset(itemsOffset));
  }, [itemsOffset]);

  return (
    <>
      <BorderLeft>
        <H1>Launches</H1>
      </BorderLeft>
      <Tabs initialTabsData={initialTabsData} data={setQuery}>
        <DataProvider query={query}>
          <LaunchesList />
          <Pagination>
            <PaginationContainer
              handleOffset={setItemsOffset}
              offset={itemsOffset}
            />
          </Pagination>
        </DataProvider>
      </Tabs>
    </>
  );
};

export default Launches;
