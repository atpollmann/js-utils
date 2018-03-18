var isFileExtensionInMimeType = require('./isFileExtensionInMimeType');

test('should return false if file type is not allowed', function () {
  expect(isFileExtensionInMimeType('image/jpeg', ['pdf', 'png'])).toBe(false);
  expect(isFileExtensionInMimeType('application/pdf', ['jpg'])).toBe(false);
  expect(isFileExtensionInMimeType('application/pdf', [])).toBe(false);
});

test('should returns true if file type is allowed', function() {
  expect(isFileExtensionInMimeType('image/jpeg', ['pdf', 'png', 'jpg'])).toBe(true)
  expect(isFileExtensionInMimeType('application/pdf', ['pdf'])).toBe(true)
});

test('should return false if mime type does not exists', function() {
  expect(isFileExtensionInMimeType('nonExistentMime/Type', ['png', 'jpeg'])).toBe(false)
});