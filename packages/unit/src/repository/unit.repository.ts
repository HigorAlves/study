import { injectable } from 'inversify'

@injectable()
export class UnitRepository {
	public get(): { title: string; author: string }[] {
		return [
			{
				title: 'The Awakening',
				author: 'Kate Higor',
			},
			{
				title: 'City of Glass',
				author: 'Paul Auster',
			},
		]
	}
}
