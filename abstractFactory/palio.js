const CarInterface = require( './interfaces/popularCarInterface' );

module.exports = class Palio extends CarInterface {
  constructor() {
    super();
  }

  showInfo() {
    console.log( "I am a Palio" );
  }
}