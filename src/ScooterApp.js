const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = ["Manhattan", "Brooklyn", "Queens", "Bronx", "StatenIsland"]
    this.registeredUsers = []
  }
  // methods here
  register(username, password, age) {
    user.username = username
    user.password = password
    user.age = age
    this.registeredUsers.push(user)
  }
}

module.exports = ScooterApp
