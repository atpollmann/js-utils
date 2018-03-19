'use strict'

/**
 * Dependencies
 * @private
 */
var sprintf = require('sprintf-js');

module.exports = strFormat;

/**
 * Given a string with tokens in it and an array of replacements, returns
 * the string with the tokens replaced by the replacements.
 *
 * Usage:
 * `strFormat("This is a %s %s", ["formatted", "string"]`
 * returns `This is a formatted string`
 *
 * @param { string } str - The string with or without placeholders
 * @param { string[] } replacements - An array of replacements for the placeholders
 * @returns { string }
 */
function strFormat(str, replacements) {
  if(replacements && replacements.length > 0) {
    str = sprintf.vsprintf(str, replacements);
  }
  return str;
}