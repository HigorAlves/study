import { unitContainer } from './inversify.config'
import { Handler } from './types/interfaces'
import { TYPES } from './types/types'

const Unit = unitContainer.get<Handler>(TYPES.handler)

console.log(Unit.get())

export { Unit }
