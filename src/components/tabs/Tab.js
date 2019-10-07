import React from 'react';

const Tab = ({ label, isActive, tabIndex, handleTabClick }) => {
  const onTabClick = () => {
    handleTabClick(tabIndex);
  };

  return (
    <button
      style={{ color: isActive ? 'orange' : 'black', cursor: 'pointer' }}
      onClick={onTabClick}
    >
      {label}
    </button>
  );
};

export default Tab;
