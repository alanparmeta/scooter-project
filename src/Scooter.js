class Scooter {
  constructor(station, user) {
    this.station = station
    this.user = user
    this.serial = Math.floor(1000*Math.random())
    this.charge = Math.floor(100*Math.random())
    this.isBroken = false
    this.docked = true
  }
}

module.exports = Scooter
