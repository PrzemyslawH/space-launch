import React, { useContext } from 'react';
import styled from 'styled-components';

import { DataContext } from './context/DataProvider';
import Counter from './counter/Counter';
import CounterContainer from './counter/CounterContainer';
import BigText from './BigText';
import H4 from './headings/H4';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpcomingLaunch = () => {
  const launchName = useContext(DataContext).results[0].name;
  const upcomingLaunchDate = useContext(DataContext).results[0].net;

  return (
    <>
      <Wrapper>
        <H4>Upcoming launch</H4>
        <BigText>{launchName}</BigText>
        <Counter>
          <CounterContainer upcomingLaunchDate={upcomingLaunchDate} />
        </Counter>
      </Wrapper>
    </>
  );
};

export default UpcomingLaunch;
