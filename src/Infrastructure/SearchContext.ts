import { createContext } from "react";
import { Card } from "../Domain/Card";
import { BoosterType } from "../Domain/PackConstruction";

type Props = {
  setSelectedSet: (set?: string) => void;
  selectedSet?: string | null;
  setBoosterType: (cards: BoosterType) => void;
  boosterType: BoosterType;
  setDraftCards: (cards: Card[]) => void;
  draftCards: Card[];
};

const SearchContext = createContext<Props>({
  setSelectedSet: () => undefined,
  selectedSet: null,
  setBoosterType: (type: BoosterType) => undefined,
  boosterType: "draft",
  setDraftCards: (cards: Card[]) => undefined,
  draftCards: [],
});

export default SearchContext;
