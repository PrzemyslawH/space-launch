import React, { useContext } from 'react';

import { DataContext } from '../context/DataProvider';
import SectionGrid from '../SectionGrid';
import BorderLeft from '../BorderLeft';
import ProfileImage from '../ProfileImage';
import H2 from '../headings/H2';
import ItemSubtitle from '../ItemSubtitle';
import SectionDetails from '../SectionDetails';
import H4 from '../headings/H4';
import Info from '../Info';
import Description from '../Description';

const SpaceStation = () => {
  const item = useContext(DataContext);

  const { founded, image_url, status, description, deorbited, orbit, owners, name } = item;

  return (
    <>
      <SectionGrid>
        <div>
          <BorderLeft>
            <ProfileImage image={image_url} />
            <H2>{name}</H2>
            <ItemSubtitle props={status.name} />
          </BorderLeft>
        </div>
        <SectionDetails>
          {founded && <H4>Founded</H4>}
          <Info>{founded}</Info>
          {deorbited && <H4>De-orbited</H4>}
          <Info>{deorbited}</Info>
          {orbit && <H4>Orbit</H4>}
          <Info>{orbit}</Info>
          {owners[0].abbrev && <H4>Owners</H4>}
          <Info>{owners.map(owner => `${owner.abbrev}, `)}</Info>
          {description && <H4>Description</H4>}
          <Description>{description}</Description>
        </SectionDetails>
      </SectionGrid>
    </>
  );
};

export default SpaceStation;
