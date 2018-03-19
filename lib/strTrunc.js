'use strict'

module.exports = strTrunc

/**
 * Truncates a string to the specified number of characters
 * ellipsifying it (adding three dots at the end)
 *
 * @param { string } str - The string to truncate
 * @param { number } [characters=10] - The amount of characters to truncate (excluding the dots)
 * @returns { string }
 */
function strTrunc(str, characters) {
  var def = 10;
  characters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : def;
  return str.length <= characters ? str : str.substr(0, characters > 0 ? characters : def) + '...'
}