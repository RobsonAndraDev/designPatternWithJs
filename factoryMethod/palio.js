const CarInterface = require( './interfaces/carInterface' );

module.exports = class Palio extends CarInterface {
  constructor() {
    super();
  }

  showInfo() {
    console.log( "I am a Palio" );
  }
};