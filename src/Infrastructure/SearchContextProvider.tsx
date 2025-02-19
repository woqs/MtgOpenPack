import React, { useState } from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSet, setSelectedSet] = useState<string|null>();

  const TokenValue = {
    setSelectedSet: (set?: string | null) => setSelectedSet(set),
    selectedSet: selectedSet,
  };

  return (
    <SearchContext.Provider value={TokenValue}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
