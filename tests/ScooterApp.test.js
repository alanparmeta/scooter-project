const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')
const Scooter = require('../src/Scooter')

// ScooterApp tests here
scooterApp = new ScooterApp
describe('scooter app stations', () => {
  test('checks there are five scooter app stations', () => {
    expect(scooterApp.stations.length).toBe(5);
  })
})
// register user
scooterApp = new ScooterApp
user = new User
scooterApp.register("Rod the rat", "Scuttle", 1)
describe('user registration', () => {
  test('Rod the rat is too young', () => {
    expect(scooterApp.message).toBe("Too young!")
  })
})
// log in
scooterApp = new ScooterApp
scooterApp.register("Rod the rat", "Scuttle", 1)
describe('user login', () => {
  test('Error is thrown for bad login details', () => {
    expect(scooterApp.logIn).toThrow("Username or password is incorrect.")
  })
})
// add scooter
scooter = new Scooter
describe('add scooter', () => {
  test('Scooter has been successfully added', () => {
    expect(scooter.station).toBe(location)
  })
})

// remove scooter
describe('remove scooter', () => {
  test('Scooter has been successfully removed', () => {
    expect(scooterApp.message).toBe("Scooter has been removed.")
  })
})