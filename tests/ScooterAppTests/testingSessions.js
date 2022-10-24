const ScooterApp = require('../../src/ScooterApp')
const User = require('../../src/User')
scooterApp = new ScooterApp
user = new User
scooterApp.register("Alan", "Pineapple", 38)
// scooterApp.register("Anthea", "Strawberry", 19)
// scooterApp.register("Rod the Rat", "Scuttle", 1)
console.log(scooterApp)