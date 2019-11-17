const FiestaPrototype = require( './prototype/fiestaPrototype' );

const prototypeFiest = new FiestaPrototype();
const newFiesta = prototypeFiest.clone();

newFiesta.setValueBuy( 27900.0 );
usedFiesta = new FiestaPrototype( newFiesta );
usedFiesta.setValueBuy( 21000.10 );

console.log( newFiesta.showInfo() );
console.log( usedFiesta.showInfo() );