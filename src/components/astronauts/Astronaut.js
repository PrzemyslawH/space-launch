import React, { useContext } from 'react';

import { DataContext } from '../context/DataProvider';
import SectionGrid from '../SectionGrid';
import BorderLeft from '../BorderLeft';
import H2 from '../headings/H2';
import ItemSubtitle from '../ItemSubtitle';
import SectionDetails from '../SectionDetails';
import H4 from '../headings/H4';
import Info from '../Info';
import Description from '../Description';
import ProfileImage from '../ProfileImage';

const Astronaut = () => {
  const item = useContext(DataContext);
  const {
    name,
    status,
    date_of_birth,
    date_of_death,
    agency,
    nationality,
    bio,
    profile_image,
  } = item;

  return (
    <>
      <SectionGrid>
        <div>
          <BorderLeft>
            <ProfileImage image={profile_image} />
            <H2>{name}</H2>
            <ItemSubtitle props={nationality} />
          </BorderLeft>
        </div>
        <SectionDetails>
          {status.name && <H4>Status</H4>}
          <Info>{status.name}</Info>
          {date_of_birth && <H4>Date of birth</H4>}
          <Info>{date_of_birth}</Info>
          {date_of_death && <H4>Date of death</H4>}
          <Info>{date_of_death}</Info>
          {agency.name && <H4>Agency</H4>}
          <Info>{agency.name}</Info>
          {bio && <H4>Bio</H4>}
          <Description>{bio}</Description>
        </SectionDetails>
      </SectionGrid>
    </>
  );
};

export default Astronaut;
