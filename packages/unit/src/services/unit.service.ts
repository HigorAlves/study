import { inject, injectable } from 'inversify'

import { UnitRepository } from '../repository/unit.repository'
import { TYPES } from '../types/types'

@injectable()
export class UnitService {
	private readonly repository: UnitRepository

	constructor(@inject(TYPES.repository) repository: UnitRepository) {
		this.repository = repository
	}

	public get(): string {
		return this.repository.get()
	}
}
