const CarInterface = require( './sedanCarInterface' );

module.exports = class Palio extends CarInterface {
  constructor() {
    super();
  }

  showInfo() {
    console.log( "I am a Siana" );
  }
};