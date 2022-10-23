const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('checks scooter object is of type "object"', () => {
    expect(typeof new Scooter).toEqual("object");
  })
})

//Method tests
  // tests here!

  //rent method
  describe('rent method', () => {
    const scooter = new Scooter
    scooter.rent()
    string = scooter.message
    test('checks that rent has an output', () => {
      expect.anything(string)
    })
  })
  //dock method
  describe('dock method', () => {
    const scooter = new Scooter
    scooter.dock("KX")
    test('checks that dock takes an argument', () => {
      expect(scooter.station).toEqual("KX")
    })
  })
  //recharge method
  test('recharge method', async () => {
    const scooter = new Scooter
    await scooter.recharge();
    expect(scooter.charge).toBe(100)
  })
  //requestRepair method
  test('request repair method', async () => {
    const scooter = new Scooter
    scooter.isBroken = true // break it first
    await scooter.requestRepair();
    expect(scooter.isBroken).toBe(false)
  })

//})
