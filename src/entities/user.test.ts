import { it, describe, expect } from 'vitest'
import { User } from './user'

describe('User', () => {
  const userProps = { name: 'John Doe' }

  it('should create an instance of User', () => {
    const user = new User(userProps)
    expect(user).toBeDefined()
  })
})
