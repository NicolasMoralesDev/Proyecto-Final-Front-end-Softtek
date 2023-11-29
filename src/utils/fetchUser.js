const mockOrders = [
  {
    id: 1,
    userId: 1,
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        quantity: 1
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        quantity: 2
      }
    ],
    total: 500,
    createdAt: '2020-01-01T00:00:00.000Z',
    address: '123 Main St',
    phone: '1234567890'
  },
  {
    id: 2,
    userId: 1,
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        quantity: 1
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        quantity: 2
      }
    ],
    total: 500,
    createdAt: '2021-01-01T00:00:00.000Z',
    address: '123 Main St',
    phone: '1234567890'
  },
  {
    id: 3,
    userId: 1,
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        quantity: 1
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        quantity: 2
      }
    ],
    total: 500,
    createdAt: '2022-01-01T00:00:00.000Z',
    address: '123 Main St',
    phone: '1234567890'
  },
]

const mockUsers = [
  {
    id: 1,
    fullName: 'John Doe',
    email: 'user@mail.com',
    password: 'password',
    role: 'user',
    orders: mockOrders
  },{
    id: 2,
    fullName: 'Jane Smith',
    email: 'admin@mail.com',
    password: 'password',
    role: 'admin'
  }
]

export const loginRequest = async (email, password) => {
  const user = mockUsers.find(user => user.email === email && user.password === password)
  if (user) {
    return user
  } else {
    throw new Error('User not found')
  }
}

export const modifyUserRequest = async (user) => {
  const index = mockUsers.findIndex(u => u.email === user.email)
  if (index !== -1) {
    mockUsers[index] = user
    return user
  } else {
    throw new Error('User not found')
  }
}

export const registerRequest = async (user) => {
  user = {
    ...user,
    id: mockUsers.length + 1,
    role: 'user'
  }
  const index = mockUsers.findIndex(u => u.email === user.email)
  if (index === -1) {
    mockUsers.push(user)
    return user
  } else {
    throw new Error('User already exists')
  }
}