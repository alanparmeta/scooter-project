const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = ["Manhattan", "Brooklyn", "Queens", "Bronx", "StatenIsland"]
    this.registeredUsers = {}
  }
  // methods here
  register(username, password, age) {
    if (this.registeredUsers[username]) {
      this.message = "Already registered!"
      console.log(this.message)
    } else {
      if (age > 17) {
        // Add the user to the registeredUsers object
        user[username] = username
        this.registeredUsers[username] = {
          password,
          age,
          loggedIn: false,
          accountChange: 0
        }
        //})
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
