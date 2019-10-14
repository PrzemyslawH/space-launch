import React, { useEffect } from 'react';

import API from '../services/API';
import useDataFetch from '../hooks/useDataFetch';
import Error from '../components/Error';
import Counter from '../components/Counter';
import Loading from '../components/Loading';

const nextLaunchQuery = API.launches.upcoming;

const Home = () => {
  const [{ data, isLoading, isError }, doFetch] = useDataFetch(
    { items: [], totalItems: 0 },
    nextLaunchQuery
  );

  useEffect(() => {
    doFetch(nextLaunchQuery);
  }, []);

  return (
    <div>
      {isError && <Error />}

      {isLoading ? (
        <Loading />
      ) : (
        <Counter upcomingLaunchDate={data.items[0].net} />
      )}
    </div>
  );
};

export default Home;
