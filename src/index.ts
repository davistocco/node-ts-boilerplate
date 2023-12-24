import { User } from './entities/user'

const user = new User({ name: 'John Doe' })

console.log(`Hello, ${user.name}!`)
