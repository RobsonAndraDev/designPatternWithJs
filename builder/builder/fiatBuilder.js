const CarBuilder = require( './carBuilder' );

module.exports = class FiatBuider extends CarBuilder {
  buildPrice() {
    this.car.price = 25000.00;
  }

  buildMotorDescription() {
    this.car.motorDescription = "Fire flex 1.0";
  }

  buildMadeYear() {
    this.car.madeYear = 2011;
  }

  buildModel() {
    this.car.model = "Palio";
  }

  buildMaker() {
    this.car.maker = "Fiat";
  }
};