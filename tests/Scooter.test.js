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
    scooter = new Scooter
    scooter.rent()
    string = scooter.message
    test('checks that rent has an output', () => {
      expect.anything(string)
    })
  })
  //dock method
  
  //requestRepair method

  //charge method

//})
