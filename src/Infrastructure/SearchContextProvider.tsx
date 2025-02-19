import React, { useState } from "react";
import SearchContext from "./SearchContext";
import { Card } from "../Domain/Card";

const SearchContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSet, setSelectedSet] = useState<string|null>();
  const [boosterCards, setBoosterCards] = useState<Card[]>([]);

  const TokenValue = {
    setSelectedSet: (set?: string | null) => setSelectedSet(set),
    selectedSet: selectedSet,
    setBoosterCards: (cards: Card[]) => {console.log(cards);setBoosterCards(cards);},
    boosterCards: boosterCards
  };

  return (
    <SearchContext.Provider value={TokenValue}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
