import React, { useState, useEffect } from 'react';

import LaunchesList from '../components/launches/LaunchesList';
import DataProvider from '../components/context/DataProvider';
import api, { offset, order } from '../services/api';
import Pagination from '../components/Pagination';
import Tabs from '../components/tabs/Tabs';

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
    <Tabs initialTabsData={initialTabsData} data={setQuery}>
      <DataProvider query={query}>
        <LaunchesList />
        <Pagination handleOffset={setItemsOffset} offset={itemsOffset} />
      </DataProvider>
    </Tabs>
  );
};

export default Launches;
