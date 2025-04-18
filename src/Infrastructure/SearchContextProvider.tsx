import React, { useState } from "react";
import SearchContext from "./SearchContext";
import { Card } from "../Domain/Card";
import { BoosterType } from "../Domain/PackConstruction";

const SearchContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSet, setSelectedSet] = useState<string|null>();
  const [boosterType, setBoosterType] = useState<BoosterType>("draft");
  const [draftCards, setDraftCards] = useState<Card[]>([]);

  const TokenValue = {
    setSelectedSet: (set?: string | null) => setSelectedSet(set),
    selectedSet: selectedSet,
    setBoosterType: (type: BoosterType) => setBoosterType(type),
    boosterType: boosterType,
    setDraftCards: (cards: Card[]) => setDraftCards(cards),
    draftCards: draftCards,
  };

  return (
    <SearchContext.Provider value={TokenValue}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
