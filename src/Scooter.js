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
  dock () {
    
  }
}

module.exports = Scooter
