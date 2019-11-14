
module.exports = class CarFactoryInterface {
  constructor() {
    if( !this.popularCar ) {
      throw new Error( "The method popularCar should be implemented" );
    }
    if( !this.sedanCar ) {
      throw new Error( "The method sedanCar should be implemented" );
    }
  }
}