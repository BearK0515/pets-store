import { useMemo } from "react";
import FILTER_TYPE from "../constants/filterTypeConst";


const useFilteredData = (
  data,
  filterType,
  keyword = '',
  priceForwardOrder = true
) => {
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

    if (filterType === FILTER_TYPE.PRICE && priceForwardOrder) {
      return [...filteredKeywordData].sort((a, b) => a.price - b.price);
    }
    if (filterType === FILTER_TYPE.PRICE && !priceForwardOrder) {
      return [...filteredKeywordData].sort((a, b) => b.price - a.price);
    }
    return filteredKeywordData;
  }, [data, filterType, keyword, priceForwardOrder]);

  return { filteredData };
};

export default useFilteredData;
