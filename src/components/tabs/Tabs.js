import React, { useState, useEffect } from 'react';
import TabList from './TabList';

import ItemsList from '../list/ItemsList';

const Tabs = ({ initialTabsData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabsData, setTabsData] = useState(initialTabsData[0].content);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    setTabsData(initialTabsData[index].content);
  };

  return (
    <>
      <TabList
        activeTabIndex={activeTabIndex}
        tabsData={initialTabsData}
        handleTabClick={handleTabClick}
      />
      <ItemsList query={tabsData}/>
    </>
  );
};

export default Tabs;
