const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
scooterApp = new ScooterApp
describe('scooter app stations', () => {
  test('checks there are five scooter app stations', () => {
    expect(scooterApp.stations.length).toBe(5);
  })
})
// register user
scooterApp = new ScooterApp
describe('user registration', () => {
  test('checks underage users are denied service', () => {
    expect(scooterApp.message).toEqual("Denied!");
  })
})
// log in

// add scooter

// remove scooter
