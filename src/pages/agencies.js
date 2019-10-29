import React, { useState } from 'react';

import AgenciesList from '../components/agencies/AgenciesList';
import DataProvider from '../components/context/DataProvider';
import api, { offset, order } from '../services/api';
import PaginationContainer from '../components/pagination/PaginationContainer';
import H1 from '../components/headings/H1';
import Pagination from '../components/pagination/Pagination';
import BorderLeft from '../components/BorderLeft';

const Agencies = () => {
  const [itemsOffset, setItemsOffset] = useState(0);

  return (
    <DataProvider query={api.agencies + order.by_name + offset(itemsOffset)}>
      <BorderLeft>
        <H1>Agencies</H1>
      </BorderLeft>
      <AgenciesList />
      <Pagination>
        <PaginationContainer
          handleOffset={setItemsOffset}
          offset={itemsOffset}
        />
      </Pagination>
    </DataProvider>
  );
};

export default Agencies;
