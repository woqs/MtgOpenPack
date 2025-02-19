export type Card = {
  id: string;
  type_line: string;
  image_uris: {normal: string};
  border_color: Border;
  rarity: Rarity;
  frame_effects?: string[];
}

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
