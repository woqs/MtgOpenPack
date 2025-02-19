import { createContext } from "react";
import { Card } from "../Domain/Card";

type Props = {
  setSelectedSet: (set?: string) => void;
  selectedSet?: string | null;
  setBoosterCards: (cards: Card[]) => void;
  boosterCards: Card[];
};

const SearchContext = createContext<Props>({
  setSelectedSet: () => undefined,
  selectedSet: null,
  setBoosterCards: (cards: Card[]) => undefined,
  boosterCards: [],
});

export default SearchContext;
