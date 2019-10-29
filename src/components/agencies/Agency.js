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

const Agency = () => {
  const item = useContext(DataContext);

  const {
    name,
    country_code,
    type,
    founding_year,
    administrator,
    launchers,
    spacecraft,
    description,
  } = item;

  return (
    <>
      <SectionGrid>
        <div>
          <BorderLeft>
            <H2>{name}</H2>
            <ItemSubtitle props={country_code} />
          </BorderLeft>
        </div>
        <SectionDetails>
          {type && <H4>Type</H4>}
          <Info>{type}</Info>
          {founding_year && <H4>Founding year</H4>}
          <Info>{founding_year}</Info>
          {administrator && <H4>Administrator</H4>}
          <Info>{administrator}</Info>
          {launchers && <H4>Launchers</H4>}
          <Info>{launchers}</Info>
          {spacecraft && <H4>Spacecraft</H4>}
          <Info>{spacecraft}</Info>
          {description && <H4>Description</H4>}
          <Description>{description}</Description>
        </SectionDetails>
      </SectionGrid>
    </>
  );
};

export default Agency;
