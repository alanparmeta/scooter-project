const User = require('../src/User')

user = new User
// test username
describe('username', () => {
  test('expect username to be undefined', () => {
    expect(user.username).toBe(undefined);
  })
})
// test password
describe('password', () => {
  test('expect password to be undefined', () => {
    expect(user.password).toBe(undefined);
  })
})
// test age
describe('age', () => {
  test('expect age to be undefined', () => {
    expect(user.age).toBe(undefined);
  })
})