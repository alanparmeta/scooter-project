const ScooterApp = require('../../src/ScooterApp')
const User = require('../../src/User')
scooterApp = new ScooterApp
user = new User
scooterApp.register(user)
scooterApp.register(user)

console.log(scooterApp)