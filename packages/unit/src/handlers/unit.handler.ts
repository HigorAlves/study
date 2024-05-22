import { UnitService } from '../services/unit.service'
import { inject, injectable } from 'inversify'
import { TYPES } from '../types/types'

@injectable()
export class UnitHandler {
	@inject(TYPES.service) private service: UnitService

	public get(): string {
		return this.service.get()
	}
}
