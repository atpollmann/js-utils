var utils = require('../index')

test('should return false if file type is not allowed', function () {
  expect(utils.isFileExtensionInMimeType('image/jpeg', ['pdf', 'png'])).toBe(false);
  expect(utils.isFileExtensionInMimeType('application/pdf', ['jpg'])).toBe(false);
  expect(utils.isFileExtensionInMimeType('application/pdf', [])).toBe(false);
});

test('should returns true if file type is allowed', function() {
  expect(utils.isFileExtensionInMimeType('image/jpeg', ['pdf', 'png', 'jpg'])).toBe(true)
  expect(utils.isFileExtensionInMimeType('application/pdf', ['pdf'])).toBe(true)
});

test('should return false if mime type does not exists', function() {
  expect(utils.isFileExtensionInMimeType('nonExistentMime/Type', ['png', 'jpeg'])).toBe(false)
});