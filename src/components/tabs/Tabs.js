import React, { useState } from 'react';
import styled from 'styled-components';

import TabList from './TabList';

const TabWrapper = styled.div`
  text-align: center;
`;

const Tabs = ({ initialTabsData, data, children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    data(initialTabsData[index].content);
  };

  return (
    <>
      <TabWrapper>
        <TabList
          activeTabIndex={activeTabIndex}
          tabsData={initialTabsData}
          handleTabClick={handleTabClick}
        />
      </TabWrapper>
      {children}
    </>
  );
};

export default Tabs;
