import React, { useState } from 'react';

import AstronautsList from '../components/astronauts/AstronautsList';
import DataProvider from '../components/context/DataProvider';
import api, { offset, order } from '../services/api';
import PaginationContainer from '../components/pagination/PaginationContainer';
import H1 from '../components/headings/H1';
import Pagination from '../components/pagination/Pagination';
import BorderLeft from '../components/BorderLeft';

const Astronauts = () => {
  const [itemsOffset, setItemsOffset] = useState(0);

  return (
    <DataProvider query={api.astronauts + order.by_name + offset(itemsOffset)}>
      <BorderLeft>
        <H1>Astronauts</H1>
      </BorderLeft>
      <AstronautsList />
      <Pagination>
        <PaginationContainer
          handleOffset={setItemsOffset}
          offset={itemsOffset}
        />
      </Pagination>
    </DataProvider>
  );
};

export default Astronauts;
