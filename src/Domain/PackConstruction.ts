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
  | "fancyCommon"
  | "fancyUncommon"
  | "fancyRare"
  | "fancyMythic"
  | "fancyBasicLand"
;

export type BoosterType =
  | "draft"
  | "play"
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
  return card.rarity === rarity && (card.border_color === "black") === blackBorder;
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
    return pickCard(filteredCard[cardType]);
  });
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
        fancyRare:      cards.filter((card: Card) => filterCard(card, "rare", false) || card.rarity === "rare" && !!card.frame_effects),
        fancyMythic:    cards.filter((card: Card) => filterCard(card, "mythic", false) || card.rarity === "mythic" && !!card.frame_effects),
        fancyBasicLand: cards.filter((card: Card) => card.type_line.match(/^Basic Land/) && card.border_color !== "black"),
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

///////////////
/// Rulings ///
///////////////

const WildcardSlot: Slot = [
  {cardType: "common", proba: [0, 70]},
  {cardType: "uncommon", proba: [70.1, 87.6]},
  {cardType: "rare", proba: [87.7, 95.4]}, {cardType: "fancyRare", proba: [95.5, 98.4]},
  {cardType: "mythic", proba: [98.5, 99.5]}, {cardType: "fancyMythic", proba: [99.6, 100]}
];

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
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "rare", proba: [0, 87.4]}, {cardType: "mythic", proba: [87.5, 100]}],
];

const PlayBooster: Ruling = [
  [{cardType: "basicLand", proba: [0, 79.9]}, {cardType: "fancyBasicLand", proba: [80, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 94.9]}, {cardType: "uncommon", proba: [95, 100]}],
  [{cardType: "common", proba: [0, 84.9]}, {cardType: "uncommon", proba: [85, 100]}],
  [{cardType: "common", proba: [0, 64.9]}, {cardType: "uncommon", proba: [65, 100]}],
  [{cardType: "uncommon", proba: [0, 99.5]}, {cardType: "rare", proba: [99.6, 99.8]}, {cardType: "mythic", proba: [99.9, 100]}],
  [{cardType: "uncommon", proba: [0, 89.9]}, {cardType: "rare", proba: [90, 97.9]}, {cardType: "mythic", proba: [98, 100]}],
  [{cardType: "uncommon", proba: [0, 74.9]}, {cardType: "rare", proba: [75, 94.9]}, {cardType: "mythic", proba: [95, 100]}],
  [{cardType: "rare", proba: [0, 87.4]}, {cardType: "mythic", proba: [87.5, 100]}],
];

const SetRuling: Ruling = [
  [{cardType: "basicLand", proba: [0, 79.9]}, {cardType: "fancyBasicLand", proba: [80, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "fancyCommon", proba: [0, 64.9]}, {cardType: "fancyUncommon", proba: [65, 100]}], // showcase C/U
  WildcardSlot,
  WildcardSlot,
  WildcardSlot, // traditionnal foil
  [{cardType: "rare", proba: [0, 86.4]}, {cardType: "mythic", proba: [86.5, 100]}],
];

const CollectorRuling: Ruling = [
  [{cardType: "fancyBasicLand", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "common", proba: [0, 100]}],
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "uncommon", proba: [0, 100]}],
  [{cardType: "fancyUncommon", proba: [0, 100]}],
  [{cardType: "fancyUncommon", proba: [0, 100]}],
  [{cardType: "fancyRare", proba: [0, 87.4]}, {cardType: "fancyMythic", proba: [87.5, 100]}],
  [{cardType: "fancyRare", proba: [0, 87.4]}, {cardType: "fancyMythic", proba: [87.5, 100]}],
  [{cardType: "fancyRare", proba: [0, 87.4]}, {cardType: "fancyMythic", proba: [87.5, 100]}],
  [{cardType: "fancyRare", proba: [0, 87.4]}, {cardType: "fancyMythic", proba: [87.5, 100]}],
];

const RulingDictionnary: {[name in BoosterType]: Ruling} = {
  draft: DraftRuling,
  play: PlayBooster,
  set: SetRuling,
  collector: CollectorRuling,
}
