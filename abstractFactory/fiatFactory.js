const CarFactoryInterface = require( "./interfaces/carFactoryInterface" );
const Palio = require( "./palio" );
const Siena = require( "./siena" );

module.exports = class FiatFactory extends CarFactoryInterface {
  constructor() {
    super();
  }

  popularCar() {
    return new Palio();
  }

  sedanCar() {
    return new Siena();
  }
}