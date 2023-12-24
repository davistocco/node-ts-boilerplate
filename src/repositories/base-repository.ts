import { type BaseEntity } from '../entities/base-entity'

export interface BaseRepository<T extends BaseEntity> {
  create: (entity: T) => Promise<void>
}
