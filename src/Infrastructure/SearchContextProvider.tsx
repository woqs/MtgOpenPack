import React, { useState } from "react";
import SearchContext from "./SearchContext";
import { Card } from "../Domain/Card";
import { BoosterType } from "../Domain/PackConstruction";

const SearchContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSet, setSelectedSet] = useState<string|null>();
  const [boosterCards, setBoosterCards] = useState<Card[]>([]);
  const [boosterType, setBoosterType] = useState<BoosterType>("draft");
  const [draftCards, setDraftCards] = useState<Card[]>([]);

  const TokenValue = {
    setSelectedSet: (set?: string | null) => setSelectedSet(set),
    selectedSet: selectedSet,
    setBoosterCards: (cards: Card[]) => setBoosterCards(cards),
    boosterCards: boosterCards,
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
