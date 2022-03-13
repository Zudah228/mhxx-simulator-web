export const WEAPON_TYPE = {
	greatSword: 'greatSword',
	longSword: 'longSword',
	swordAndShield: 'swordAndShield',
	dualBlades: 'dualBlades',
	lance: 'lance',
	gunlance: 'gunlance',
	hammer: 'hammer',
	huntingHorn: 'huntingHorn',
	switchAxe: 'switchAxe',
	chargeBlade: 'chargeBlade',
	insectGlaive: 'insectGlaive',
	lightBowGun: 'lightBowGun',
	heavyBowGun: 'heavyBowGun',
	bow: 'bow',
	palicoCutting: 'palicoCutting',
	palicoBlunt: 'palicoBlunt'
} as const;

export type WeaponType = typeof WEAPON_TYPE[keyof typeof WEAPON_TYPE];

export type WeaponTypeProperty = {
	name: string;
	colorHex: number;
};

export function weaponTypeProperty(value: WeaponType | string): WeaponTypeProperty {
	switch (value) {
		case WEAPON_TYPE.greatSword:
			return {
				name: '大剣',
				colorHex: 0
			};
		case WEAPON_TYPE.longSword:
			return {
				name: '太刀',
				colorHex: 0
			};
		case WEAPON_TYPE.swordAndShield:
			return {
				name: '片手剣',
				colorHex: 0
			};
		case WEAPON_TYPE.dualBlades:
			return {
				name: '双剣',
				colorHex: 0
			};
		case WEAPON_TYPE.lance:
			return {
				name: 'ランス',
				colorHex: 0
			};
		case WEAPON_TYPE.gunlance:
			return {
				name: 'ガンランス',
				colorHex: 0
			};
		case WEAPON_TYPE.hammer:
			return {
				name: 'ハンマー',
				colorHex: 0
			};
		case WEAPON_TYPE.huntingHorn:
			return {
				name: '狩猟笛',
				colorHex: 0
			};
		case WEAPON_TYPE.switchAxe:
			return {
				name: 'スラッシュアックス',
				colorHex: 0
			};
		case WEAPON_TYPE.chargeBlade:
			return {
				name: 'チャージアックス',
				colorHex: 0
			};
		case WEAPON_TYPE.insectGlaive:
			return {
				name: '操虫棍',
				colorHex: 0
			};
		case WEAPON_TYPE.lightBowGun:
			return {
				name: 'ライトボウガン',
				colorHex: 0
			};
		case WEAPON_TYPE.heavyBowGun:
			return {
				name: 'ヘビィボウガン',
				colorHex: 0
			};
		case WEAPON_TYPE.bow:
			return {
				name: '弓',
				colorHex: 0
			};
		case WEAPON_TYPE.palicoCutting:
			return {
				name: 'オトモ切断',
				colorHex: 0
			};
		case WEAPON_TYPE.palicoBlunt:
			return {
				name: 'オトモ打撃',
				colorHex: 0
			};
	}
}

export const WeaponTypeList = Object.values(WEAPON_TYPE);
