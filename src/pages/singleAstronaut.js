import React from 'react';
import { useParams } from 'react-router-dom';

import DataProvider from '../components/context/DataProvider';
import api from '../services/api';
import Astronaut from '../components/astronauts/Astronaut';

const SingleAstronaut = () => {
  const { id } = useParams();

  return (
    <DataProvider query={api.astronauts + id}>
      <Astronaut />
    </DataProvider>
  );
};

export default SingleAstronaut;
