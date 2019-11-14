const FiatFactory = require( './fiatFactory' );
const fiatFactory = new FiatFactory();
const palio = fiatFactory.createCar();

palio.showInfo();
