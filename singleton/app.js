const CarMaker = require( './singleton/carMaker' );

const manufacturerOne = new CarMaker();
const manufacturerTwo = new CarMaker();

manufacturerOne.makeCar();
manufacturerOne.makeCar();
manufacturerOne.makeCar();

manufacturerTwo.makeCar();
manufacturerTwo.makeCar();
manufacturerTwo.makeCar();

manufacturerOne.report();
manufacturerTwo.report();
