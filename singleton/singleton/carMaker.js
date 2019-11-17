module.exports = class CarMaker {
  constructor() {
    if( !CarMaker.carMaker ) {
      CarMaker.count = 0;
      CarMaker.carMaker = this;
    }
    return CarMaker.carMaker;
  }

  makeCar() {
    console.log( `Car number ${++CarMaker.count}` );
  }

  report() {
    console.log( `The total number of cars is ${CarMaker.count}` );
  }
};