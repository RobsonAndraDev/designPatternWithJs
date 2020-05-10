const FileComposite = require( './composite/fileComposite' );
const FileVideo     = require( './model/fileVideo' );

const myFolder      = new FileComposite( "myFolder" );
const myOtherFolder = new FileComposite( "myOtherFolder" );
const myVideo       = new FileVideo( "myVideo" );
const myOtherVideo  = new FileVideo( "myOtherVideo" );

myFolder.add( myOtherVideo );
myFolder.add( myVideo );
myFolder.printFileName();

myFolder.delete( "myVideo" );
myFolder.add( myOtherFolder );
console.log( '' );
myFolder.printFileName();

// console.log( myFolder.getFile( "myOtherVideo" ) );

// try {
//   myVideo.add( myOtherVideo );
// } catch ( e ) {
//   console.error( `add() => Error: ${e.message}` );
// }
