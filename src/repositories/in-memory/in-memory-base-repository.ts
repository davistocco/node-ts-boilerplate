import { type BaseEntity } from '../../entities/base-entity'
import { type BaseRepository } from '../base-repository'

export abstract class InMemoryBaseRepository<T extends BaseEntity> implements BaseRepository<T> {
  protected items: T[] = []

  async create (entity: T): Promise<void> {
    this.items.push(entity)
  }
}
