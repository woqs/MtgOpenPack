import React, { useCallback, useContext, useState } from 'react';
import { ScryfallApiRepository } from '../Infrastructure/ScryfallApiRepository';
import SearchContext from '../Infrastructure/SearchContext';
import { Card } from '../Domain/Card';
import { FilteredSetCardsDictionnary, PackConstruction } from '../Domain/PackConstruction';

function OpenAPack() {
  const {loadSetCards} = ScryfallApiRepository();
  const {openPack, constructFilteredSetCards} = PackConstruction();
  const [setCards, setSetCards] = useState<FilteredSetCardsDictionnary>({});
  const {selectedSet, setBoosterCards, boosterType} = useContext(SearchContext);

  const openPackClick = useCallback(() => {
    if (selectedSet && setCards[selectedSet] === undefined) {
      loadSetCards(selectedSet)
        .then(
          (cards: Card[]) => {
            const filteredSetCards = constructFilteredSetCards(selectedSet, cards);
            setSetCards((prevState) => ({...prevState , ...filteredSetCards}));
            setBoosterCards(openPack(filteredSetCards[selectedSet], boosterType));
          }
        );
    } else {
      selectedSet && setBoosterCards(openPack(setCards[selectedSet], boosterType));
    }
  }, [loadSetCards, selectedSet, setCards, boosterType])

  return (
    <input
      type="button"
      title="Open a pack"
      value="Open a pack"
      onClick={openPackClick}
    />
  );
}

export default OpenAPack;

