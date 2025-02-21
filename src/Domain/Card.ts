export type ImageUris = {
  image_uris?: {normal: string}
}

export type Currency =
  | "eur"
  | "usd"
  | "usd_foil"
;

export type Card = {
  id: string;
  type_line: string;
  card_faces?: ImageUris[]
  border_color: Border;
  rarity: Rarity;
  frame_effects?: string[];
  promo_types?: string[];
  prices: {[currency in Currency]: string};
} & ImageUris;

export type Rarity = 
  | "common"
  | "uncommon"
  | "rare"
  | "mythic"
;

export type Border =
  | "black"
  | "borderless"
  | "yellow"
  | "white"
;
