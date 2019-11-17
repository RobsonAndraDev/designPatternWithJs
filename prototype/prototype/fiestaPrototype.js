const CarPrototype = require( './carPrototype' );

module.exports = class FiestaPrototype extends CarPrototype {
  constructor( fiestaPrototype ) {
    super();
    if( fiestaPrototype ) {
      this.valueBuy = fiestaPrototype.getValueBuy();
    }
  }

  showInfo() {
    return `Model: Fiesta\tMaker: Ford\tValor: R$ ${this.getValueBuy()}`;
  }

  clone() {
    return new FiestaPrototype( this );
  }
};