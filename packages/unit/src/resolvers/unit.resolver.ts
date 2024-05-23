import 'reflect-metadata'

import { UnitHandler } from '@/handlers/unit.handler'
import { unitContainer } from '@/inversify.config'
export const Unit = unitContainer.get<UnitHandler>(UnitHandler)

export const unitResolver = {
	Query: {
		books: () => Unit.get(),
	},
}
