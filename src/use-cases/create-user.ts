import { User } from '../entities/user'
import { type UserRepository } from '../repositories/user-repository'

export interface CreateUserInput {
  name: string
}

export type CreateUserOutput = User

export class CreateUser {
  constructor (private readonly userRepository: UserRepository) {}

  async execute ({ name }: CreateUserInput): Promise<CreateUserOutput> {
    const user = new User({ name })
    await this.userRepository.create(user)
    return user
  }
}
