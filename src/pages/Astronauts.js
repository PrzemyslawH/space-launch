import React from 'react';

import API from '../services/API';
import ItemsList from '../components/list/ItemsList';

const Astronauts = () => {
  return (
    <>
      <ItemsList query={API.astronauts} />
    </>
  );
};

export default Astronauts;