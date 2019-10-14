import React from 'react';

import API from '../services/API';
import ItemsList from '../components/list/ItemsList';

const SpaceStations = () => {
  return (
    <>
      <ItemsList query={API.spacestation}/>
    </>
  );
};

export default SpaceStations;
