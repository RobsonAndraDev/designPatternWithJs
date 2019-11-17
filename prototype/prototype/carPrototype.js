const validNumber = ( value ) => {
  const regex = /[0-9]|\./;
  return regex.test( value );
};

module.exports = class CarroPrototype {
  constructor(){
    this.valueBuy = 0.0;
    if( !this.showInfo ) {
      throw new Error( "The method showInfo should be implemented" );
    }
    if( !this.clone ) {
      throw new Error( "The method clone should be implemented" );
    }
  }  

  getValueBuy() {
    return this.valueBuy;
  }

  setValueBuy( valueBuy ) {
    if( validNumber( valueBuy ) ) {
      this.valueBuy = valueBuy;
    } else {
      throw new Error( `${valueBuy} is not a number` );
    }
  }

};