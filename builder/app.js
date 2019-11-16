const CarDirector = require( './builder/carDirector' );
const FiatBuilder = require( './builder/fiatBuilder' );
const fiatMaker = new CarDirector( new FiatBuilder() );
const car = fiatMaker.buildCarro();

console.log( car );