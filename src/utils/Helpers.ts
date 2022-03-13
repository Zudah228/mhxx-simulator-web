export class Helper {
	static parseNumber(value: string): number {
		const num = parseInt(value);
		return isNaN(num) ? 0 : num;
	}
}
