import { v4 as uuid } from 'uuid'

export type BaseProps<T> = {
  id?: string
  createdAt?: Date
  updatedAt?: Date
} & T

export abstract class BaseEntity {
  readonly id: string
  readonly createdAt: Date
  readonly updatedAt: Date

  protected constructor ({ id, createdAt, updatedAt }: Partial<BaseEntity>) {
    this.id = id ?? uuid()
    this.createdAt = createdAt ?? new Date()
    this.updatedAt = updatedAt ?? new Date()
  }
}
