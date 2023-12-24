import { type User } from '../../entities/user'
import { type UserRepository } from '../user-repository'
import { InMemoryBaseRepository } from './in-memory-base-repository'

export class InMemoryUserRepository extends InMemoryBaseRepository<User>
  implements UserRepository {

}
