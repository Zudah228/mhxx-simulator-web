export class DamageHelper {
  static expectedValue(
    attack: number,
    affinity: number,
    sharpnessMagnification: number
  ): number {
    return (attack + 15) * this.affinityCorrection(affinity) * sharpnessMagnification;
  }

  static affinityCorrection(affinity: number) {
    return 1 + (0.25 * affinity / 100);
  }
}