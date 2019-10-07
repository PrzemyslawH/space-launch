import React from 'react';
import Tab from './Tab';

const TabList = ({ activeTabIndex, tabsData, handleTabClick }) => {
  return (
    <div>
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
    </div>
  );
};

export default TabList;
