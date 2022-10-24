const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // scooterSessions = []
  constructor() {
    this.stations = ["Manhattan", "Brooklyn", "Queens", "Bronx", "StatenIsland"]
    // scooterSessions.push(this)
  }
  this.registeredUsers = {}
  // methods here
  register(username, password, age) {
    console.log(registeredUsers)
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
  logIn(username, password) {
    if (//"Alan" === "Rat"
      username == this.registeredUsers[username]) {
      //success
      this.registeredUsers[username].loggedIn = true
      console.log("Login success.")
    } else {
      // failure
      throw "Username or password is incorrect."
    }
  }
  addScooter(location, scooter) {
    scooter = new Scooter
    scooter.station = location
    this.stations.push(location)
  }
  removeScooter(scooterToRemove) {
    message = "Scooter has been removed."
    console.log(message)
  }
}
module.exports = ScooterApp
