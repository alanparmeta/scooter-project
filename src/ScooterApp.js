const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = ["Manhattan", "Brooklyn", "Queens", "Bronx", "StatenIsland"]
    this.registeredUsers = {}
  }
  // methods here
  register(username, password, age) {
    user[username] = username
    this.registeredUsers[username] = {password, age}
    console.log(typeof user)
  }
}

module.exports = ScooterApp
