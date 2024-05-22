import { injectable } from 'inversify'

@injectable()
export class UnitRepository {
	public get(): string {
		return 'It came from the repo'
	}
}
