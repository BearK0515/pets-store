import axios from 'axios';
import { useState, useMemo } from 'react';

const baseURL = 'https://www.waylins.com';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const targetURL = useMemo(() => {
    return `${baseURL}${url}`;
  }, [url]);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const DEFAULT_OPTIONS = {
        method: 'GET'
      };

      const res = await axios({
        ...DEFAULT_OPTIONS,
        url: targetURL
      });
      // console.log(res);
      setValue(res.data);
      setIsLoading(false);
      console.log("res:", res.data);
      console.log("value:",value)
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    value,
    error,
    fetchData
  };
};

export default useFetch;
