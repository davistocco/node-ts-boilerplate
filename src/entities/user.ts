import { BaseEntity, type BaseProps } from './base-entity'

export type UserProps = BaseProps<{ name: string }>

export class User extends BaseEntity {
  private readonly props: UserProps

  constructor (props: UserProps) {
    super(props)
    this.props = props
  }

  get name (): string {
    return this.props.name
  }
}
