import axios from 'axios';
import { useState, useMemo, useEffect, useCallback } from 'react';

const baseURL = 'https://www.waylins.com';

const useFetchBlog = (url, { setArticalOrigin, setArticalAll }) => {
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
      console.log(res.data);
      const articleData = res.data?.sort((a, b) => {
        return b.isTop - a.isTop;
      });
      setArticalOrigin(articleData);
      setArticalAll(articleData);

      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [setArticalOrigin, setArticalAll, targetURL]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isLoading,
    error
  };
};

export default useFetchBlog;
