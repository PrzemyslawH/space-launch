import React, { useEffect } from 'react';

import API, { limit } from '../services/API';
import useDataFetch from '../hooks/useDataFetch';
import Error from '../components/Error';
import Counter from '../components/Counter';
import Loading from '../components/Loading';

const Home = () => {
  const [{ data, isLoading, isError }, doFetch] = useDataFetch(
    { items: [], totalItems: 0 },
    API.launches.upcoming + limit(1)
  );

  useEffect(() => {
    doFetch(API.launches.upcoming + limit(1));
  }, []);

  return (
    <div>
      {isError && <Error />}

      {isLoading ? <Loading /> : <Counter upcomingLaunchDate={data.items[0].net} />}
    </div>
  );
};

export default Home;
