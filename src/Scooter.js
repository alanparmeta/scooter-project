class Scooter {
  constructor(station, user) {
    this.station = station
    this.user = user
    this.serial = Math.floor(1000*Math.random())
    this.charge = Math.floor(100*Math.random())
    this.isBroken = false
    this.docked = true
  }
  rent () {
  if (this.isBroken === true) {
    this.message = "Broken!"
    console.log(message)
    } else {
      if (this.charge > 20) {
        this.message = "Enjoy!"
        console.log(this.message)
      } else {
        this.message = "Please charge!"
        console.log(this.message)
      }
    }
  }
  dock (station) {
    if (station) {
      this.station = station
      this.docked = true
      this.user = ""
    } else {
      throw "Docking station required!"
    }
  }
  async recharge() {
    await new Promise(resolve => setTimeout(resolve, 2000)) // wait 2 seconds
    this.charge = 100
  }
  async requestRepair() {
    await new Promise(resolve => setTimeout(resolve, 2000)) // wait 2 seconds
    this.isBroken = false
    console.log("Repaired!")
  }
}

module.exports = Scooter
