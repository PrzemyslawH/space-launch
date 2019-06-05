import { useEffect, useState } from 'react';
import * as axios from 'axios';

const useDataFetch = (initialData, initialUrl) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios(url);

        if (!didCancel) {
          setData({ items: response.data.results, totalItems: response.data.count });
        }
      } catch (error) {
        if (!didCancel) {
          setIsError(true);
        }
      }
      setIsLoading(false);
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useDataFetch;
