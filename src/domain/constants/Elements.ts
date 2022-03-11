export const ELEMENT = {
  none: "none",
  fire: "fire",
  water: "water",
  thunder: "thunder",
  ice: "ice",
  dragon: "dragon",
  poison: "poison",
  paralyze: "paralyze",
  hypnosis: "hypnosis",
  blastblight: "blastblight"
} as const;

export type Element = typeof ELEMENT[keyof typeof ELEMENT];

export function elementName(value: string): string {
  switch (value) {
    case ELEMENT["none"]:
      return "無";
    case ELEMENT["fire"]:
      return "火";
    case ELEMENT["water"]:
      return "水";
    case ELEMENT["thunder"]:
      return "雷";
    case ELEMENT["ice"]:
      return "氷";
    case ELEMENT["dragon"]:
      return "龍";
    case ELEMENT["poison"]:
      return "毒";
    case ELEMENT["paralyze"]:
      return "麻痺";
    case ELEMENT["hypnosis"]:
      return "睡眠";
    case ELEMENT["blastblight"]:
      return "爆破";
    default:
      return "無";
  }
}

export const ElementList = Object.values(ELEMENT)
