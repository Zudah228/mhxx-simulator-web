export const BUFFING_SKILL = {} as const;

export type BuffingSkill = typeof BUFFING_SKILL[keyof typeof BUFFING_SKILL];

export type BuffingSkillProperty = {
	name: string;
};
