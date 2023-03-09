import axios from "axios";
import { useState, useMemo, useEffect } from "react";

const baseURL = "https://www.waylins.com";

const useFetch = (url, { setProductHot }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const targetURL = useMemo(() => {
    return `${baseURL}${url}`;
  }, [url]);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const DEFAULT_OPTIONS = {
        method: "GET",
      };

      const res = await axios({
        ...DEFAULT_OPTIONS,
        url: targetURL,
      });
      setProductHot(res.data?.filter((product) => product.isOnShelves === 1));
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    error,
  };
};

export default useFetch;
