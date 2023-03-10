import axios from 'axios';
import { useState, useMemo, useEffect, useCallback } from 'react';

const baseURL = 'https://www.waylins.com';

const useFetchAPI = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({});
  const [error, setError] = useState(null);

  const targetURL = useMemo(() => {
    return `${baseURL}${url}`;
  }, [url]);

  const fetchData = useCallback(() => {
    (async () => {
      try {
        setIsLoading(true);
        const DEFAULT_OPTIONS = {
          method: 'GET'
        };
        const res = await axios({
          ...DEFAULT_OPTIONS,
          url: targetURL
        });
        setValue(res);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [targetURL]);

  // ()=>(async ()=>...)()

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    value,
    error
  };
};

export default useFetchAPI;
