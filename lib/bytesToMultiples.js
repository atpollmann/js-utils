'use strict'

module.exports = bytesToMultiples

/**
 * Returns a string that represents the
 * approximation from bytes to KiB, MiB, etc.
 * (From https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
 *
 * @param bytes
 * @param showBytes If true, appends in parenthesis the number of bytes
 */
function bytesToMultiples(bytes, showBytes) {
  
  var out = '', multiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
  var approx = bytes / 1024
  
  for (var multiple = 0; approx >= 1; approx /= 1024, multiple++) {
    out = approx.toFixed(1) + " " + multiples[multiple]
  }
  
  return out === '' ? bytes + ' bytes' : showBytes ? (out + " (" + bytes + " bytes)") : out
}