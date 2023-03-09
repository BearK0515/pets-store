import axios from 'axios';
import { useState, useMemo, useEffect, useCallback } from 'react';

const baseURL = 'https://www.waylins.com';

const useFetchAPI = (url, { setProductHot }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [value, setValue] = useState({});
  const [error, setError] = useState(null);

  const targetURL = useMemo(() => {
    return `${baseURL}${url}`;
  }, [url]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const DEFAULT_OPTIONS = {
        method: 'GET'
      };
      const res = await axios({
        ...DEFAULT_OPTIONS,
        url: targetURL
      });
      // setValue(res.data);
      setProductHot(res.data?.filter((product) => product.isOnShelves === 1));
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [setProductHot, targetURL]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isLoading,
    error
  };
};

export default useFetchAPI;
