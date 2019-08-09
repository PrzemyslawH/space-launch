import React, { useEffect } from 'react';

import API, { limit } from 'services/API';
import useDataFetch from 'hooks/useDataFetch';
import Error from 'components/Error';
import Counter from 'components/Counter';

const Home = () => {
  const [{ data, isLoading, isError }, doFetch] = useDataFetch(
    { items: [], totalItems: 0 },
    API.launches + limit(1)
  );

  useEffect(() => {
    doFetch(API.launches + limit(1));
  }, []);

  return (
    <div>
      {isError && <Error />}

      {isLoading ? null : <Counter upcomingLaunchDate={data.items[0].net} />}
    </div>
  );
};

export default Home;
