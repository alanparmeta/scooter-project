const User = require('../src/User')

user = new User
// test username
describe('username', () => {
  user.username = "Alan"
  test('expect username to be Alan', () => {
    expect(user.username).toBe("Alan");
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