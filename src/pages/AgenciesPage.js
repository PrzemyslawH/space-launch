import React, { useState } from 'react';

import AgenciesList from '../components/agencies/AgenciesList';
import DataProvider from '../components/context/DataProvider';
import API, { offset, order } from '../services/API';
import Pagination from '../components/Pagination';

const AgenciesPage = () => {
  const [itemsOffset, setItemsOffset] = useState(0);

  return (
    <DataProvider query={API.agencies + order.by_name + offset(itemsOffset)}>
      <AgenciesList />
      <Pagination handleOffset={setItemsOffset} offset={itemsOffset} />
    </DataProvider>
  );
};

export default AgenciesPage;
