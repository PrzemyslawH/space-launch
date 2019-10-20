import React, { useState } from 'react';

import AgenciesList from '../components/agencies/AgenciesList';
import DataProvider from '../components/context/DataProvider';
import api, { offset, order } from '../services/api';
import Pagination from '../components/Pagination';

const Agencies = () => {
  const [itemsOffset, setItemsOffset] = useState(0);

  return (
    <DataProvider query={api.agencies + order.by_name + offset(itemsOffset)}>
      <AgenciesList />
      <Pagination handleOffset={setItemsOffset} offset={itemsOffset} />
    </DataProvider>
  );
};

export default Agencies;
