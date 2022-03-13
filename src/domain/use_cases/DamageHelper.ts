export class DamageHelper {
	static expectedValue(attack: number, affinity: number, sharpnessMagnification: number): number {
		if (attack === 0) {
			return 0;
		}
		const result = (attack + 15) * this.affinityCorrection(affinity) * sharpnessMagnification;
		return isNaN(result) ? 0 : result;
	}

	static affinityCorrection(affinity: number) {
		const result = 1 + (0.25 * affinity) / 100;
		return isNaN(result) ? 0 : result;
	}
}
