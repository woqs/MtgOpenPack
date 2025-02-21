import { createContext } from "react";
import { Card } from "../Domain/Card";
import { BoosterType } from "../Domain/PackConstruction";

type Props = {
  setSelectedSet: (set?: string) => void;
  selectedSet?: string | null;
  setBoosterCards: (cards: Card[]) => void;
  boosterCards: Card[];
  setBoosterType: (cards: BoosterType) => void;
  boosterType: BoosterType;
};

const SearchContext = createContext<Props>({
  setSelectedSet: () => undefined,
  selectedSet: null,
  setBoosterCards: (cards: Card[]) => undefined,
  boosterCards: [],
  setBoosterType: (type: BoosterType) => undefined,
  boosterType: "draft",
});

export default SearchContext;
