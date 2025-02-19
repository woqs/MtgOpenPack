import { Card } from "./Card";

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

type CardType =
  | "common"
  | "uncommon"
  | "rare"
  | "mythic"
  | "basicLand"
;

type Proba = {cardType: CardType, proba: number[]}
type Slot = Proba[];
type Ruling = Slot[];

const DraftRuling: Ruling = [
  [{cardType: "basicLand", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "rare", proba: [0, 87.4]}, {cardType: "mythic", proba: [87.5, 100]}],
]

const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max);
}

const pickCard = (cards: Card[]): Card => {
  return cards[getRandomNumber(cards.length)];
}

const filterCard = (card: Card, rarity: CardType, blackBorder: boolean): boolean => {
  return card.rarity === rarity && (card.border_color === "black") === blackBorder;
}

export const PackConstruction = () => ({
  constructFilteredSetCards: (setCode: string, cards: Card[]): FilteredSetCardsDictionnary => {
    return {
      [setCode] : {
        common:    cards.filter((card: Card) => filterCard(card, "common", true) && !card.type_line.match(/^Basic Land/)),
        uncommon:  cards.filter((card: Card) => filterCard(card, "uncommon", true)),
        rare:      cards.filter((card: Card) => filterCard(card, "rare", true) && (card.frame_effects === undefined || card.frame_effects?.length === 0)),
        mythic:    cards.filter((card: Card) => filterCard(card, "mythic", true) && (card.frame_effects === undefined || card.frame_effects?.length === 0)),
        basicLand: cards.filter((card: Card) => card.type_line.match(/^Basic Land/) && card.border_color === "black"),
        fancyCommon:    cards.filter((card: Card) => filterCard(card, "common", false) && !card.type_line.match(/^Basic Land/)),
        fancyUncommon:  cards.filter((card: Card) => filterCard(card, "uncommon", false)),
        fancyRare:      cards.filter((card: Card) => filterCard(card, "rare", false) || !!card.frame_effects),
        fancyMythic:    cards.filter((card: Card) => filterCard(card, "mythic", false) || !!card.frame_effects),
        fancyBasicLand: cards.filter((card: Card) => card.type_line.match(/^Basic Land/) && card.border_color !== "black"),
      }
    }
  },
  openPack: (filteredCard: FilteredSetCards, ruling?: string): Card[] => {
    if (ruling === undefined) {
      return DraftRuling.map((proba: Slot) => {
        const number = getRandomNumber(1000)/10;
        const cards = proba.map((proba: Proba) => {
          if(proba.proba[0] < number && number < proba.proba[1]) {
            return proba.cardType;
          }
          return undefined;
        }).filter((cardType) => cardType !== undefined);
        const cardType: CardType = cards[0] ?? "common";
        return pickCard(filteredCard[cardType]);
      });
    }
    return [];
  },
});
