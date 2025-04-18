import React, { useCallback, useContext, useState } from 'react';
import { ScryfallApiRepository } from '../Infrastructure/ScryfallApiRepository';
import SearchContext from '../Infrastructure/SearchContext';
import { Card } from '../Domain/Card';
import { BoosterType, FilteredSetCards, FilteredSetCardsDictionnary, PackConstruction } from '../Domain/PackConstruction';

const OpenPacks: React.FC<{number: number, title: string}> = ({number, title}) => {
  const {loadSetCards} = ScryfallApiRepository();
  const {openPack, constructFilteredSetCards} = PackConstruction();
  const [setCards, setSetCards] = useState<FilteredSetCardsDictionnary>({});
  const {selectedSet, setDraftCards, boosterType} = useContext(SearchContext);

  const openPacks = (dictionnary: FilteredSetCards, boosterType: BoosterType): Card[] => {
    let cards: Card[] = [];
    for(let i = 0; i < number; i++) {
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
            setDraftCards(openPacks(filteredSetCards[selectedSet], boosterType));
          }
        );
    } else {
      selectedSet && setDraftCards(openPacks(setCards[selectedSet], boosterType));
    }
  }, [loadSetCards, selectedSet, setCards, boosterType])

  return (
    <button onClick={openDraftClick} >
      {title}
    </button>
  );
}

export default OpenPacks;

