import 'reflect-metadata'

import { Container } from 'inversify'

import { UnitHandler } from './handlers/unit.handler'
import { UnitRepository } from './repository/unit.repository'
import { UnitService } from './services/unit.service'
import { Handler, Repository, Service } from './types/interfaces'
import { TYPES } from './types/types'

const unitContainer = new Container()

unitContainer.bind<Repository>(TYPES.repository).to(UnitRepository)
unitContainer.bind<Service>(TYPES.service).to(UnitService)
unitContainer.bind<Handler>(TYPES.handler).to(UnitHandler)

export { unitContainer }
