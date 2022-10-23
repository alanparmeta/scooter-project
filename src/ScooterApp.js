const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = ["Manhattan", "Brooklyn", "Queens", "Bronx", "StatenIsland"]
    this.registeredUsers = {}
  }
  // methods here
  register(user) {
    registeredUsers
    if (this.user) {
      this.message = "Already registered!"
      console.log(this.message)
    } else {
      if (this.age > 17) {
        // add to registeredUsers object
        // key: username (private)
        // other key value pairs
        this.message = "Registered!"
        console.log(this.message)
      } else {
        this.message = "Too young!"
        console.log(this.message)
      }
    }
  }
}

module.exports = ScooterApp
