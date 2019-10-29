import { useEffect, useState } from 'react';
import * as axios from 'axios';

const useDataFetch = (initialData, initialUrl) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await axios(url);

      setData(response.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useDataFetch;
