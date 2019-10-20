import React, { useState } from 'react';

import SpaceStationsList from '../components/spacestations/SpaceStationsList';
import DataProvider from '../components/context/DataProvider';
import API, { offset, order } from '../services/API';
import Pagination from '../components/Pagination';

const SpaceStationsPage = () => {
  const [itemsOffset, setItemsOffset] = useState(0);

  return (
    <DataProvider
      query={API.spacestations + order.by_name + offset(itemsOffset)}
    >
      <SpaceStationsList />
      <Pagination handleOffset={setItemsOffset} offset={itemsOffset} />
    </DataProvider>
  );
};

export default SpaceStationsPage;
