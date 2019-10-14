import React from 'react';

import API from '../services/API';
import ItemsList from '../components/list/ItemsList';

const Agencies = () => {
  return (
    <>
      <ItemsList query={API.agencies} />
    </>
  );
};

export default Agencies;
