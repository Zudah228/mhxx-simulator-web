import type { Effectiveness } from "@domain/entities/effectiveness/Effectiveness"
import type { ElementType } from "@domain/constants/Elements"

export class MonsterEffectiveness {
  name: string
  weakestTo: ElementType
  effectiveness: Array<Record<string, Effectiveness>>
}