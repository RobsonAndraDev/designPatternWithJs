const FiatFactory = require( './abstractFactory/fiatFactory' );
const fiatFactory = new FiatFactory();
let car = fiatFactory.sedanCar();
car.showInfo();
car = fiatFactory.popularCar();
car.showInfo();
