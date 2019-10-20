import React, { useState } from 'react';
import TabList from './TabList';

const Tabs = ({ initialTabsData, data, children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    data(initialTabsData[index].content);
  };

  return (
    <>
      <TabList
        activeTabIndex={activeTabIndex}
        tabsData={initialTabsData}
        handleTabClick={handleTabClick}
      />
      {children}
    </>
  );
};

export default Tabs;
