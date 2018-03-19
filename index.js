'use strict';

var isFileExtensionInMimeType = require('./lib/isFileExtensionInMimeType');
var bytesToMultiples = require('./lib/bytesToMultiples')
var strFormat = require('./lib/strFormat')

module.exports = {
  isFileExtensionInMimeType: isFileExtensionInMimeType,
  bytesToMultiples: bytesToMultiples,
  strFormat: strFormat
};


