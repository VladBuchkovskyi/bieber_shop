import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'buchkek@gmail.com',
    password: bcrypt.hashSync('199613425143', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users