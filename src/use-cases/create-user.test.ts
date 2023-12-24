import { it, describe, expect, beforeEach, vi } from 'vitest'
import { CreateUser } from './create-user'
import { type UserRepository } from '../repositories/user-repository'
import { InMemoryUserRepository } from '../repositories/in-memory/in-memory-user-repository'
import { User } from '../entities/user'

describe('CreateUser', () => {
  let userRepository: UserRepository
  let createUser: CreateUser

  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    createUser = new CreateUser(userRepository)
  })

  it('should create a new user', async () => {
    const createUserInput = { name: 'John Doe' }
    const createSpy = vi.spyOn(userRepository, 'create')
    const createdUser = await createUser.execute(createUserInput)

    expect(createdUser).toBeInstanceOf(User)
    expect(createSpy).toHaveBeenCalledOnce()
    expect(createdUser.id).toBeDefined()
    expect(createdUser.createdAt).toBeInstanceOf(Date)
    expect(createdUser.updatedAt).toBeInstanceOf(Date)
    expect(createdUser.name).toBe(createUserInput.name)
  })
})
