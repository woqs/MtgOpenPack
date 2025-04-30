import { Card } from "./Card";
import { DraftRuling, RulingDictionnary } from "./Ruling";

export type FilteredSetCards = {
  common: Card[],
  uncommon: Card[],
  rare: Card[],
  mythic: Card[],
  basicLand: Card[],
  fancyCommon: Card[],
  fancyUncommon: Card[],
  fancyRare: Card[],
  fancyMythic: Card[],
  fancyBasicLand: Card[],
}
export type FilteredSetCardsDictionnary = {[set: string]: FilteredSetCards}

export type CardType =
  | "common"
  | "uncommon"
  | "rare"
  | "mythic"
  | "basicLand"
  | "fancyCommon"
  | "fancyUncommon"
  | "fancyRare"
  | "fancyMythic"
  | "fancyBasicLand"
;

export type BoosterType =
  | "draft"
  | "play"
  | "playTarkir"
  | "set"
  | "collector"
;

type Proba = {cardType: CardType, proba: number[]}
type Slot = Proba[];
type Ruling = Slot[];

const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max);
}

const pickCard = (cards: Card[]): Card => {
  return cards[getRandomNumber(cards.length)];
}

const filterCard = (card: Card, rarity: CardType, blackBorder: boolean): boolean => {
  return (
    !!card.type_line &&
    card.rarity === rarity &&
    (card.border_color === "black") === blackBorder
  );
}

const loadCardFromRuling = (filteredCard: FilteredSetCards, ruling: Ruling): Card[] => {
  return ruling.map((proba: Slot) => {
    const number = getRandomNumber(1000)/10;
    const cards = proba.map((proba: Proba) => {
      if(proba.proba[0] < number && number <= proba.proba[1]) {
        return proba.cardType;
      }
      return undefined;
    }).filter((cardType) => cardType !== undefined);
    const cardType: CardType = cards[0] ?? "common";

    if (filteredCard[cardType].length === 0) {
      switch(cardType) {
        case "fancyCommon":
          return pickCard(filteredCard["common"]);
        case "fancyUncommon":
          return pickCard(filteredCard["uncommon"]);
        case "fancyRare":
          return pickCard(filteredCard["rare"]);
        case "fancyMythic":
          return pickCard(filteredCard["mythic"]);
        case "fancyBasicLand":
          return pickCard(filteredCard["basicLand"]);
        case "mythic": // Old sets don't have any mythic slot
          return pickCard(filteredCard["rare"]);
      }
    }
    return pickCard(filteredCard[cardType]);
  });
}

export const PackConstruction = () => ({
  constructFilteredSetCards: (setCode: string, cards: Card[]): FilteredSetCardsDictionnary => {
    return {
      [setCode] : {
        common:    cards.filter((card: Card) => filterCard(card, "common", true) && !!card.type_line && !card.type_line.match(/^Basic Land/)),
        uncommon:  cards.filter((card: Card) => filterCard(card, "uncommon", true)),
        rare:      cards.filter((card: Card) => filterCard(card, "rare", true) && (card.frame_effects === undefined || card.frame_effects?.length === 0)),
        mythic:    cards.filter((card: Card) => filterCard(card, "mythic", true) && (card.frame_effects === undefined || card.frame_effects?.length === 0)),
        basicLand: cards.filter((card: Card) => !!card.type_line && card.type_line.match(/^Basic Land/) && card.border_color === "black"),
        fancyCommon:    cards.filter((card: Card) => filterCard(card, "common", false) && !!card.type_line && !card.type_line.match(/^Basic Land/)),
        fancyUncommon:  cards.filter((card: Card) => filterCard(card, "uncommon", false)),
        fancyRare:      cards.filter((card: Card) => filterCard(card, "rare", false) || (card.rarity === "rare" && !!card.frame_effects)),
        fancyMythic:    cards.filter((card: Card) => filterCard(card, "mythic", false) || (card.rarity === "mythic" && !!card.frame_effects)),
        fancyBasicLand: cards.filter((card: Card) => !!card.type_line && card.type_line.match(/^Basic Land/) && card.border_color !== "black"),
      }
    }
  },
  openPack: (filteredCard: FilteredSetCards, ruling?: BoosterType): Card[] => {
    if (ruling === undefined) {
      return loadCardFromRuling(filteredCard, DraftRuling);
    }
    return loadCardFromRuling(filteredCard, RulingDictionnary[ruling]);
  },
});
