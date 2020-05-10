module.exports = class FileComponent {
  constructor() {
    this.fileName = "";
  }
  printFileName() {
    console.log( this.fileName );
  }

  getFileName() {
    return this.fileName;
  }

  add( newFile ) {
    throw new Error( `Can't add file in: ${this.fileName} - it's not a folder` );
  }

  delete( fileName ) {
    throw new Error( `Can't delete file in: ${this.fileName} -it's not a folder` );
  }

  getFile( fileName ) {
    throw new Error( `Can't find file in: ${this.fileName} - it's not a folder` );
  }
};