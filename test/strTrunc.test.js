var utils = require('../index')

test('Should return a string truncated to the default 10 characters when no number of characters are passed', function() {
  expect(utils.strTrunc('The chan is now')).toEqual('The chan i...')
})
test('Should return a string truncated to 3 characters', function() {
  expect(utils.strTrunc('The chan is now', 3)).toEqual('The...')
})
test('Should return a string truncated to the default 10 characters when the number of characters passed are less than or equal to 0', function() {
  expect(utils.strTrunc('The chan is now', 0)).toEqual('The chan i...')
  expect(utils.strTrunc('The chan is now', -4)).toEqual('The chan i...')
})
test('Should return the same string if the number of characters is equal or greater than its length', function() {
  expect(utils.strTrunc('The chan is now', 15)).toEqual('The chan is now')
  expect(utils.strTrunc('The chan is now', 23)).toEqual('The chan is now')
})