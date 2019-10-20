import React, { useEffect, createContext } from 'react';
import useFetch from '../../hooks/useFetch';
import Error from '../Error';
import Loading from '../Loading';

export const DataContext = createContext(null);

const DataProvider = ({ query, children }) => {
  const [{ data, isLoading, isError }, doFetch] = useFetch({}, query);

  useEffect(() => {
    doFetch(query);
  }, [query]);

  return (
    <div>
      {isError && <Error />}

      {isLoading ? (
        <Loading />
      ) : (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
      )}
    </div>
  );
};

export default DataProvider;
