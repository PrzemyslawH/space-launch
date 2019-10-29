import React from 'react';
import { useParams } from 'react-router-dom';

import DataProvider from '../components/context/DataProvider';
import api from '../services/api';
import Agency from '../components/agencies/Agency';

const SingleAgency = () => {
  const { id } = useParams();

  return (
    <DataProvider query={api.agencies + id}>
      <Agency />
    </DataProvider>
  );
};

export default SingleAgency;
