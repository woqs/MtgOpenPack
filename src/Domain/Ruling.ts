import { CardType, BoosterType } from "./PackConstruction";

type Proba = {cardType: CardType, proba: number[]}
type Slot = Proba[];
type Ruling = Slot[];

const WildcardSlot: Slot = [
  {cardType: "common", proba: [0, 70]},
  {cardType: "uncommon", proba: [70.1, 87.6]},
  {cardType: "rare", proba: [87.7, 95.4]}, {cardType: "fancyRare", proba: [95.5, 98.4]},
  {cardType: "mythic", proba: [98.5, 99.5]}, {cardType: "fancyMythic", proba: [99.6, 100]}
];

export const DraftRuling: Ruling = [
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

const PlayTarkirBooster: Ruling = [
  [{cardType: "basicLand", proba: [0, 79.9]}, {cardType: "fancyBasicLand", proba: [80, 100]}],
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
  [{cardType: "common", proba: [0, 12.4]}, {cardType: "uncommon", proba: [12.5, 70.7]}, {cardType: "rare", proba: [70.8, 86.3]}, {cardType: "mythic", proba: [86.4, 88.9]}, {cardType: "fancyCommon", proba: [89, 93.5]}, {cardType: "fancyUncommon", proba: [93.6, 97.3]}, {cardType: "fancyRare", proba: [97.4, 99.6]}, {cardType: "fancyMythic", proba: [99.7, 100]}], // wildcard
  [{cardType: "common", proba: [0, 56.4]}, {cardType: "uncommon", proba: [56.5, 88.4]}, {cardType: "rare", proba: [88.5, 94.8]}, {cardType: "mythic", proba: [94.9, 95.9]}, {cardType: "fancyCommon", proba: [96, 97.5]}, {cardType: "fancyUncommon", proba: [97.6, 98.9]}, {cardType: "fancyRare", proba: [99, 99.8]}, {cardType: "fancyMythic", proba: [99.9, 100]}], // foil
  [{cardType: "rare", proba: [0, 74.9]}, {cardType: "mythic", proba: [75, 87.4]}, {cardType: "fancyRare", proba: [87.5, 98.2]}, {cardType: "fancyMythic", proba: [98.3, 100]}],
];

export const RulingDictionnary: {[name in BoosterType]: Ruling} = {
  draft: DraftRuling,
  play: PlayBooster,
  set: SetRuling,
  collector: CollectorRuling,
  playTarkir: PlayTarkirBooster,
}
