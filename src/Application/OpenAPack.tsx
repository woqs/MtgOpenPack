import React, { useCallback, useContext, useState } from 'react';
import { ScryfallApiRepository } from '../Infrastructure/ScryfallApiRepository';
import SearchContext from '../Infrastructure/SearchContext';
import { Card } from '../Domain/Card';

function OpenAPack() {
  const {loadSetCards} = ScryfallApiRepository();
  const [setCards, setSetCards] = useState<{[set: string]: Array<Card>}>({});
  const {selectedSet} = useContext(SearchContext);

  const openPack = useCallback(() => {
    if (selectedSet && (setCards[selectedSet] === undefined || setCards[selectedSet].length === 0)) {
      loadSetCards(selectedSet)
        .then(
          (cards: Card[]) => setSetCards((prevState) => ({...prevState , [selectedSet]: cards}))
        );
    }
    console.log(setCards);
  }, [loadSetCards, selectedSet, setCards])

  return (
    <input
      type="button"
      title="Open a pack"
      value="Open a pack"
      onClick={openPack}
    />
  );
}

export default OpenAPack;

