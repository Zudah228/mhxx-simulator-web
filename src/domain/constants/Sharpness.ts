export const SHARPNESS = {
  purple: "purple",
  white: "white",
  blue: "blue",
  green: "green",
  yellow: "yellow",
  orange: "orange",
  red: "red",
} as const;

export type Sharpness = typeof SHARPNESS[keyof typeof SHARPNESS];

export function sharpnessMagnification(value: string): number {
  switch (value) {
    case SHARPNESS["purple"]:
      return 1.39;
    case SHARPNESS["white"]:
      return 1.32;
    case SHARPNESS["blue"]:
      return 1.20;
    case SHARPNESS["green"]:
      return 1.05;
    case SHARPNESS["yellow"]:
      return 1.00;
    case SHARPNESS["red"]:
      return 0.75;
    case SHARPNESS["orange"]:
      return 0.5;
    default:
      return 1.00;
  }
}
export function sharpnessElementCorrection(value: string): number {
  switch (value) {
    case SHARPNESS["purple"]:
      return 1.2;
    case SHARPNESS["white"]:
      return 1.125;
    case SHARPNESS["blue"]:
      return 1.0625;
    case SHARPNESS["green"]:
      return 1.0;
    case SHARPNESS["yellow"]:
      return 0.75;
    case SHARPNESS["red"]:
      return 0.5;
    case SHARPNESS["orange"]:
      return 0.25;
    default:
      return 1.00;
  }
}

export function sharpnessName(value: string): string {
  switch (value) {
    case SHARPNESS["purple"]:
      return "紫"
    case SHARPNESS["white"]:
      return "白";
    case SHARPNESS["blue"]:
      return "青";
    case SHARPNESS["green"]:
      return "緑";
    case SHARPNESS["yellow"]:
      return "黄";
    case SHARPNESS["red"]:
      return "橙";
    case SHARPNESS["orange"]:
      return "赤";
    default:
      return "緑";
  }
}

export const SharpnessList = Object.values(SHARPNESS)
