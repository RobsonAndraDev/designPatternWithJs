const FiatFactory = require( './fiatFactory' );
const fiatFactory = new FiatFactory();
const car = fiatFactory.sedanCar();

car.showInfo();
