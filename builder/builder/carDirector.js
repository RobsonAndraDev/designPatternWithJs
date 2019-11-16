module.exports = class MakeDirector {
  constructor( maker ) {
    this.maker = maker;
  }

  buildCarro() {
    this.maker.buildPrice();
    this.maker.buildMadeYear();
    this.maker.buildMotorDescription();
    this.maker.buildModel();
    this.maker.buildMaker();
    return this.maker.getCar();
  }
};