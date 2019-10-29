import React, { useState } from 'react';

import SpaceStationsList from '../components/spacestations/SpaceStationsList';
import DataProvider from '../components/context/DataProvider';
import api, { offset, order } from '../services/api';
import PaginationContainer from '../components/pagination/PaginationContainer';
import H1 from '../components/headings/H1';
import Pagination from '../components/pagination/Pagination';
import BorderLeft from '../components/BorderLeft';

const SpaceStations = () => {
  const [itemsOffset, setItemsOffset] = useState(0);

  return (
    <DataProvider
      query={api.spacestations + order.by_name + offset(itemsOffset)}
    >
      <BorderLeft>
        <H1>Space stations</H1>
      </BorderLeft>
      <SpaceStationsList />
      <Pagination>
        <PaginationContainer
          handleOffset={setItemsOffset}
          offset={itemsOffset}
        />
      </Pagination>
    </DataProvider>
  );
};

export default SpaceStations;
