import React from 'react';
import { useParams } from 'react-router-dom';

import api from '../services/api';
import DataProvider from '../components/context/DataProvider';
import SpaceStation from '../components/spacestations/SpaceStation';

const SingleSpaceStation = () => {
  const { id } = useParams();

  return (
    <DataProvider query={api.spacestations + id}>
      <SpaceStation />
    </DataProvider>
  );
};

export default SingleSpaceStation;
