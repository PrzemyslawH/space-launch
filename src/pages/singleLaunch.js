import React from 'react';
import { useParams } from 'react-router-dom';

import DataProvider from '../components/context/DataProvider';
import api from '../services/api';
import Launch from '../components/launches/Launch';

const SingleLaunch = () => {
  const { id } = useParams();

  return (
    <DataProvider query={api.launches.all + id}>
      <Launch />
    </DataProvider>
  );
};

export default SingleLaunch;
