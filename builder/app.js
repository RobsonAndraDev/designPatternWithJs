const CarDirector = require( './builder/carDirector' );
const FiatBuilder = require( './builder/fiatBuilder' );
const fiatMaker = new CarDirector( new FiatBuilder() );

fiatMaker.buildCarro();
console.log( fiatMaker.getCarro() );