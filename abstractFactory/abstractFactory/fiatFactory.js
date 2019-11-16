const CarFactoryInterface = require( "./carFactoryInterface" );
const Palio = require( "../model/palio" );
const Siena = require( "../model/siena" );

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
};