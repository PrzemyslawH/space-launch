import React, { useContext } from 'react';

import { DataContext } from '../context/DataProvider';

const Astronaut = () => {
  const item = useContext(DataContext);

  const { name, date_of_birth, nationality, bio, profile_image } = item;

  return (
    <div>
      <h4>{name}</h4>
      <p>Date of birth: {date_of_birth}</p>
      <p>Nationality: {nationality}</p>
      <p>{bio}</p>
      {profile_image ? (
        <img src={profile_image} alt="" style={{ maxWidth: '300px' }} />
      ) : (
        <p>no image</p>
      )}
    </div>
  );
};

export default Astronaut;
