const CarFactoryInterface = require( "./interfaces/carFactoryInterface" );
const Palio = require( "./palio" );

module.exports = class FiatFactory extends CarFactoryInterface {
  constructor() {
    super();
  }

  createCar() {
    return new Palio();
  }
}