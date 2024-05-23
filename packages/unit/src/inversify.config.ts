import { Container, ContainerModule } from 'inversify'

import { UnitHandler } from '@/handlers/unit.handler'
import { UnitRepository } from '@/repository/unit.repository'
import { UnitService } from '@/services/unit.service'

const unitContainer = new Container()

const container = new ContainerModule((bind) => {
	bind<UnitRepository>(UnitRepository).toSelf().inSingletonScope()
	bind<UnitService>(UnitService).toSelf().inSingletonScope()
	bind<UnitHandler>(UnitHandler).toSelf().inSingletonScope()
})

unitContainer.load(container)

export { unitContainer }
