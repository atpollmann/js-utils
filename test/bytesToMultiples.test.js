var utils = require('../index')

test('Returns correct multiples of bytes', function() {
  expect(utils.bytesToMultiples(1024)).toEqual('1.0 KiB')
  expect(utils.bytesToMultiples(2048)).toEqual('2.0 KiB')
  expect(utils.bytesToMultiples(34516345)).toEqual('32.9 MiB')
  expect(utils.bytesToMultiples(9785436549)).toEqual('9.1 GiB')
});

test('Returns correct multiples of bytes with bytes in parenthesis', function() {
  expect(utils.bytesToMultiples(1024, true)).toEqual('1.0 KiB (1024 bytes)')
  expect(utils.bytesToMultiples(869765098, true)).toEqual('829.5 MiB (869765098 bytes)')
  expect(utils.bytesToMultiples(8671095987, true)).toEqual('8.1 GiB (8671095987 bytes)')
});

test('Returns only bytes when bytes are les than 1 KiB', function() {
  expect(utils.bytesToMultiples(23)).toEqual('23 bytes')
  expect(utils.bytesToMultiples(12, true)).toEqual('12 bytes')
});