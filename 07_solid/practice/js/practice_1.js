'strict mode'

// объект user

const User = {
  name: 'Alex',
  surname: 'Nav',
  age: 49,
}

const newUser = new Object()

const litUser = {}

const oldUser = Object.create(User)

console.log(User.name)
console.log(newUser)
console.log(litUser)
console.log(oldUser.name)

oldUser.name = 'Serg'
console.log(oldUser.name)
