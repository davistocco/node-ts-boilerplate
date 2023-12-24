import { type User } from '../entities/user'
import { type BaseRepository } from './base-repository'

export interface UserRepository extends BaseRepository<User> {

}
