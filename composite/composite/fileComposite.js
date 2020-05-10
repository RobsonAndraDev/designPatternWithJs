const FileComponent = require( '../model/fileComponent' );
module.exports = class FileComposite extends FileComponent {
  constructor( fileName ) {
    super();
    this.files = [];
    this.fileName = fileName;
  }

  printFileName() {
    console.log( this.fileName );
    this.files.forEach( file => {
      file.printFileName();
    });
  }

  add( newFile ) {
    this.files.push( newFile );
  }

  delete( fileName ) {
    const removed = this.files.find(( file, index ) => {
      if ( file.getFileName() === fileName ) {
        this.files.splice( index, 1 );
        return file; 
      }
    });
    if( removed ) {
      return removed;
    }
    throw new Error( "File doesn't exists" );
  }
  
  getFile( fileName ) {
    const file = this.files.find( file => {
      return file.getFileName() === fileName;
    });
    if (file) {
      return file;
    }
    throw new Error( "File doesn't exists" );
  }
};