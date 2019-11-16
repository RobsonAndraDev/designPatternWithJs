const FiatFactory = require( './factoryMethod/fiatFactory' );
const fiatFactory = new FiatFactory();
const palio = fiatFactory.createCar();

palio.showInfo();
