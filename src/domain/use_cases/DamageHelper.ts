export class DamageHelper {
	static expectedValue(
		attack: number,
		affinity: number,
		sharpnessMagnification: number,
		criticalBoost: boolean
	): number {
		if (attack === 0) {
			return 0;
		}
		const result =
			(attack + 15) * this.affinityCorrection(affinity, criticalBoost) * sharpnessMagnification;
		return isNaN(result) ? 0 : result;
	}

	static affinityCorrection(affinity: number, criticalBoost: boolean): number {
		let formattedAffinity: number;
		if (affinity > 100) {
			formattedAffinity = 100;
		} else {
			formattedAffinity = affinity;
		}
		console.log(formattedAffinity);
		const magnification = criticalBoost ? 0.4 : 0.25;
		const result = 1 + (magnification * formattedAffinity) / 100;
		return isNaN(result) ? 0 : result;
	}

	static isWeakPoint(num: number): boolean {
		if (isNaN(num)) {
			return false;
		}
		return num > 45;
	}
}
