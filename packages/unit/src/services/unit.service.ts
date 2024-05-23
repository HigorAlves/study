import { inject, injectable } from 'inversify'

import { UnitRepository } from '../repository/unit.repository'

@injectable()
export class UnitService {
	private readonly repository: UnitRepository

	constructor(@inject(UnitRepository) repository: UnitRepository) {
		this.repository = repository
	}

	public get(): string {
		return this.repository.get()
	}
}
