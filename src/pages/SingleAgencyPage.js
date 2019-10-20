import React from 'react';
import { useParams } from 'react-router-dom';

import DataProvider from '../components/context/DataProvider';
import API from '../services/API';
import Agency from '../components/agencies/Agency';

const SingleAgencyPage = () => {
  const { id } = useParams();

  return (
    <DataProvider query={API.agencies + id}>
      <Agency />
    </DataProvider>
  );
};

export default SingleAgencyPage;
