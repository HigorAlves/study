import { inject, injectable } from 'inversify'

import { UnitService } from '../services/unit.service'

@injectable()
export class UnitHandler {
	private service: UnitService

	constructor(@inject(UnitService) service: UnitService) {
		this.service = service
	}

	public get(): string {
		return this.service.get()
	}
}
