const FileComponent = require( './fileComponent' );
module.exports = class FileVideo extends FileComponent {
  constructor( fileName ) {
    super();
    this.fileName = fileName;
  }
};