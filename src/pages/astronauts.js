import React, { useState } from 'react';

import AstronautsList from '../components/astronauts/AstronautsList';
import DataProvider from '../components/context/DataProvider';
import api, { offset, order } from '../services/api';
import Pagination from '../components/Pagination';

const Astronauts = () => {
  const [itemsOffset, setItemsOffset] = useState(0);

  return (
    <DataProvider query={api.astronauts + order.by_name + offset(itemsOffset)}>
      <AstronautsList />
      <Pagination handleOffset={setItemsOffset} offset={itemsOffset} />
    </DataProvider>
  );
};

export default Astronauts;
