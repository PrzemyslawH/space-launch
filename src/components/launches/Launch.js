import React, { useContext } from 'react';

import { DataContext } from '../context/DataProvider';
import H2 from '../headings/H2';
import ItemSubtitle from '../ItemSubtitle';
import BorderLeft from '../BorderLeft';
import H4 from '../headings/H4';
import LaunchDate from '../LaunchDate';
import Description from '../Description';
import H3 from '../headings/H3';
import Info from '../Info';
import SectionGrid from '../SectionGrid';
import SectionDetails from '../SectionDetails';
import Counter from '../counter/Counter';
import CounterContainer from '../counter/CounterContainer';

const Launch = () => {
  const item = useContext(DataContext);

  const { name, pad, net, status, rocket, mission } = item;

  const showCounter = () => {
    let todayMilis = Date.parse(new Date());
    let launchMilis = Date.parse(net);

    if (launchMilis > todayMilis) return true;
  };

  return (
    <>
      <SectionGrid>
        <div>
          <BorderLeft>
            <H2>{name}</H2>
            <ItemSubtitle props={pad.location.name} />
          </BorderLeft>
        </div>
        <SectionDetails>
          {showCounter() && (
            <>
              <H4 primary>Time to launch</H4>
              <Counter>
                <CounterContainer upcomingLaunchDate={net} />
              </Counter>
            </>
          )}
          <H4>Launch Date</H4>
          <Info>
            <LaunchDate upcomingLaunchDate={net} />
          </Info>
          <H4>Status</H4>
          <Info>{status.name}</Info>
        </SectionDetails>
      </SectionGrid>

      <SectionGrid>
        <div>
          <BorderLeft>
            <H3>Rocket</H3>
          </BorderLeft>
        </div>
        <SectionDetails>
          <H4>Name</H4>
          <Info>{rocket.configuration.name}</Info>
          <H4>Launch service provider</H4>
          <Info>{rocket.configuration.launch_service_provider.name}</Info>
        </SectionDetails>
      </SectionGrid>

      <SectionGrid>
        <div>
          <BorderLeft>
            <H3>Mission</H3>
          </BorderLeft>
        </div>
        <SectionDetails>
          <H4>Name</H4>
          <Info>{mission.name}</Info>
          <H4>Type</H4>
          <Info>{mission.type}</Info>
          <H4>Description</H4>
          <Description>{mission.description}</Description>
        </SectionDetails>
      </SectionGrid>

      <SectionGrid>
        <div>
          <BorderLeft>
            <H3>Pad</H3>
          </BorderLeft>
        </div>
        <SectionDetails>
          <H4>Name</H4>
          <Info>{pad.name}</Info>
          <H4>Location</H4>
          <Info>{pad.location.name}</Info>
        </SectionDetails>
      </SectionGrid>
    </>
  );
};

export default Launch;
