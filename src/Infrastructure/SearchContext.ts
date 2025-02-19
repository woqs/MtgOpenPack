import { createContext } from "react";

type Props = {
  setSelectedSet: (set?: string) => void;
  selectedSet?: string | null;
};

const SearchContext = createContext<Props>({
  setSelectedSet: () => undefined,
  selectedSet: null,
});

export default SearchContext;
