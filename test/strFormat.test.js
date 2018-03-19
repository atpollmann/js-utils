var utils = require('../index')

test('Should return a string with no replacements', function() {
  expect(utils.strFormat('hello')).toEqual('hello')
});

test('Should return a string with correct replacements', function() {
  expect(utils.strFormat(
    'This is a %s complicated string because of %s',
    ['very', 'reasons']
  )).toEqual('This is a very complicated string because of reasons')
});