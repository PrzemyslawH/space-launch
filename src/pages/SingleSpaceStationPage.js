import React from 'react';
import { useParams } from 'react-router-dom';

import API from '../services/API';
import DataProvider from '../components/context/DataProvider';
import SpaceStation from '../components/spacestations/SpaceStation';

const SingleSpaceStationPage = () => {
  const { id } = useParams();

  return (
    <DataProvider query={API.spacestations + id}>
      <SpaceStation />
    </DataProvider>
  );
};

export default SingleSpaceStationPage;
