'use strict'

/**
 * Dependencies
 * @private
 */
var mime = require('mime-types')

module.exports = isFileExtensionInMimeType

/**
 * Given a file mime type (fileMime) and an array of
 * file extensions (allowedExt), returns true if any of
 * the file extensions maps to the mime type.
 *
 * @param { string } fileMime - File.type property (mime type)
 * @param { string[] } allowedExt - Array of allowed extensions
 * @returns { boolean }
 */
function isFileExtensionInMimeType(fileMime, allowedExt) {
  return allowedExt.filter(function(e) {
    return mime.types[e] === fileMime
  }).length > 0
}