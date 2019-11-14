
module.exports = class CarInterface {
  constructor() {
    if( !this.showInfo ){
      throw new Error("The method showInfo should be implemented");
    }
  }
}