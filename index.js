'use strict';

var isFileExtensionInMimeType = require('./lib/isFileExtensionInMimeType');
var bytesToMultiples = require('./lib/bytesToMultiples')
var strFormat = require('./lib/strFormat')
var strTrunc = require('./lib/strTrunc')

module.exports = {
  isFileExtensionInMimeType: isFileExtensionInMimeType,
  bytesToMultiples: bytesToMultiples,
  strFormat: strFormat,
  strTrunc: strTrunc
};


