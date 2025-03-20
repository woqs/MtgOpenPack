import React, { useCallback, useContext, useState } from 'react';
import { ScryfallApiRepository } from '../Infrastructure/ScryfallApiRepository';
import SearchContext from '../Infrastructure/SearchContext';
import { Card } from '../Domain/Card';
import { BoosterType, FilteredSetCards, FilteredSetCardsDictionnary, PackConstruction } from '../Domain/PackConstruction';

function OpenDraft() {
  const {loadSetCards} = ScryfallApiRepository();
  const {openPack, constructFilteredSetCards} = PackConstruction();
  const [setCards, setSetCards] = useState<FilteredSetCardsDictionnary>({});
  const {selectedSet, setDraftCards, boosterType} = useContext(SearchContext);

  const openDraftPacks = (dictionnary: FilteredSetCards, boosterType: BoosterType): Card[] => {
    let cards: Card[] = [];
    for(let i = 0; i < 6; i++) {
      cards = [...cards, ...openPack(dictionnary, boosterType)];
    }
    return cards;
  };

  const openDraftClick = useCallback(() => {
    if (selectedSet && setCards[selectedSet] === undefined) {
      loadSetCards(selectedSet)
        .then(
          (cards: Card[]) => {
            const filteredSetCards = constructFilteredSetCards(selectedSet, cards);
            setSetCards((prevState) => ({...prevState , ...filteredSetCards}));
            setDraftCards(openDraftPacks(filteredSetCards[selectedSet], boosterType));
          }
        );
    } else {
      selectedSet && setDraftCards(openDraftPacks(setCards[selectedSet], boosterType));
    }
  }, [loadSetCards, selectedSet, setCards, boosterType])

  return (
    <input
      type="button"
      title="Try Draft"
      value="Try Draft"
      onClick={openDraftClick}
    />
  );
}

export default OpenDraft;

