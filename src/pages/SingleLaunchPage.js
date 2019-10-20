import React from 'react';
import { useParams } from 'react-router-dom';

import DataProvider from '../components/context/DataProvider';
import API from '../services/API';
import Launch from '../components/launches/Launch';

const SingleLaunchPage = () => {
  const { id } = useParams();

  return (
    <DataProvider query={API.launches.all + id}>
      <Launch />
    </DataProvider>
  );
};

export default SingleLaunchPage;
