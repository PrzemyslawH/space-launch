import React, { useState } from 'react';

import SpaceStationsList from '../components/spacestations/SpaceStationsList';
import DataProvider from '../components/context/DataProvider';
import api, { offset, order } from '../services/api';
import Pagination from '../components/Pagination';

const SpaceStations = () => {
  const [itemsOffset, setItemsOffset] = useState(0);

  return (
    <DataProvider
      query={api.spacestations + order.by_name + offset(itemsOffset)}
    >
      <SpaceStationsList />
      <Pagination handleOffset={setItemsOffset} offset={itemsOffset} />
    </DataProvider>
  );
};

export default SpaceStations;
