const CarProduct = require( '../model/carProduct' );

module.exports = class CarBuilder {
  constructor() {
    this.car = new CarProduct();
    if ( !this.buildPrice ){
      throw new Error( "The method buildPrice is not implemented" );
    }

    if ( !this.buildMotorDescription ){
      throw new Error( "The method buildMotorDescription is not implemented" );
    }

    if ( !this.buildMadeYear ){
      throw new Error( "The method buildMadeYear is not implemented" );
    }

    if ( !this.buildModel ){
      throw new Error( "The method buildModel is not implemented" );
    }

    if ( !this.buildMaker ){
      throw new Error( "The method buildMaker is not implemented" );
    }
  }
 
  getCar() {
    return this.car;
  }
};

