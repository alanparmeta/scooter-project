const Scooter = require('../src/Scooter')
scooter = new Scooter
scooter.recharge()
setTimeout(() => {
  console.log(scooter.charge);
}, "3000")