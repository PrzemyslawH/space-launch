import React, { useState, useEffect } from 'react';
import TabList from './TabList';

import useDataFetch from '../../hooks/useDataFetch';
import API, { limit, offset } from '../../services/API';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';

const Tabs = ({ initialTabsData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabsData, setTabsData] = useState(initialTabsData);

  const [fetchQuery, setFetchQuery] = useState(API.launches.upcoming);
  const [{ data, isLoading, isError }, doFetch] = useDataFetch(
    { items: [], totalItems: 0 },
    fetchQuery
  );
  const [itemsOffset, setItemsOffset] = useState(0);
  const itemsLimit = 20;

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    setFetchQuery(tabsData[index].content);
  };

  useEffect(() => {
    doFetch(
      fetchQuery + offset(itemsOffset) + limit(itemsLimit)
    );
  }, [itemsOffset, fetchQuery]);

  return (
    <>
      <TabList
        activeTabIndex={activeTabIndex}
        tabsData={tabsData}
        handleTabClick={handleTabClick}
      />

      {isError && <Error />}

      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {data.items.map((item) => (
            <li key={item.id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
      <Pagination
        totalItems={data.totalItems}
        handleOffset={setItemsOffset}
        itemsLimit={itemsLimit}
      />
    </>
  );
};

export default Tabs;
