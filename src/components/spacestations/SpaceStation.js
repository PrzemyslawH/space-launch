import React, { useContext } from 'react';

import { DataContext } from '../context/DataProvider';

const SpaceStation = () => {
  const item = useContext(DataContext);

  const { founded, image_url, description, deorbited, name } = item;

  return (
    <div>
      <h4>{name}</h4>
      <p>Founded: {founded}</p>
      <p>Deorbited: {deorbited}</p>
      <p>{description}</p>
      <img src={image_url} alt="" style={{ maxWidth: '300px' }} />
    </div>
  );
};

export default SpaceStation;
