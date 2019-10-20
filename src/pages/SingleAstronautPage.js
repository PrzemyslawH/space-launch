import React from 'react';
import { useParams } from 'react-router-dom';

import DataProvider from '../components/context/DataProvider';
import API from '../services/API';
import Astronaut from '../components/astronauts/Astronaut';

const SingleAstronautPage = () => {
  const { id } = useParams();

  return (
    <DataProvider query={API.astronauts + id}>
      <Astronaut />
    </DataProvider>
  );
};

export default SingleAstronautPage;
