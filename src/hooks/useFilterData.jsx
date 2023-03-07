import { useMemo } from "react";

const FILTER_TYPE = {
  HOT: 0,
  NEW: 1,
  PRICE: 2,
};

const useFilteredData = (data, filterType, keyword = "", priceFowardOrder) => {
  const filteredData = useMemo(() => {
    if (!data) return;
    const filteredKeywordData = data.filter((item) =>
      item.name.includes(keyword)
    );

    if (filterType === FILTER_TYPE.HOT) {
      return [...filteredKeywordData].sort((a, b) => a.sales - b.sales);
    }

    if (filterType === FILTER_TYPE.NEW) {
      return [...filteredKeywordData].sort((a, b) => a.id - b.id);
    }

    if (filterType === FILTER_TYPE.PRICE && priceFowardOrder) {
      return [...filteredKeywordData].sort((a, b) => a.price - b.price);
    }
    if (filterType === FILTER_TYPE.PRICE && !priceFowardOrder) {
      return [...filteredKeywordData].sort((a, b) => b.price - a.price);
    }
    return filteredKeywordData;
  }, [data, filterType, keyword, priceFowardOrder]);

  return { filteredData };
};

export default useFilteredData;
