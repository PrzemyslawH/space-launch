import React, { useState } from 'react';

import AstronautsList from '../components/astronauts/AstronautsList';
import DataProvider from '../components/context/DataProvider';
import API, { offset, order } from '../services/API';
import Pagination from '../components/Pagination';

const AstronautsPage = () => {
  const [itemsOffset, setItemsOffset] = useState(0);

  return (
    <DataProvider query={API.astronauts + order.by_name + offset(itemsOffset)}>
      <AstronautsList />
      <Pagination handleOffset={setItemsOffset} offset={itemsOffset} />
    </DataProvider>
  );
};

export default AstronautsPage;
