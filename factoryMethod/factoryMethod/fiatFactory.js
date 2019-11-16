const CarFactoryInterface = require( "./carFactoryInterface" );
const Palio = require( "../model/palio" );

module.exports = class FiatFactory extends CarFactoryInterface {
  constructor() {
    super();
  }

  createCar() {
    return new Palio();
  }
};