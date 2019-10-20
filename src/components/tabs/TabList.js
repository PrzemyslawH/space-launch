import React from 'react';
import Tab from './Tab';

const TabList = ({ activeTabIndex, tabsData, handleTabClick }) => {
  return (
    <>
      {tabsData.map(({ label }, index) => {
        const isActive = activeTabIndex === index;

        return (
          <Tab
            key={index}
            label={label}
            isActive={isActive}
            handleTabClick={handleTabClick}
            tabIndex={index}
          />
        );
      })}
    </>
  );
};

export default TabList;
