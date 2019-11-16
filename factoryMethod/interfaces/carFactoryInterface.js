
module.exports = class CarFactoryInterface {
  constructor() {
    if( !this.createCar ) {
      throw new Error( "The method createCar should be implemented" );
    }
  }
};