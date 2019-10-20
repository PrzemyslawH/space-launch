import React, { useContext } from 'react';

import { DataContext } from '../context/DataProvider';

const Agency = () => {
  const item = useContext(DataContext);

  const { name, country_code, description } = item;

  return (
    <div>
      <h4>{name}</h4>
      <p>Country: {country_code}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Agency;
