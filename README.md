# js-utils

## Functions

<dl>
<dt><a href="#bytesToMultiples">bytesToMultiples(bytes, showBytes)</a></dt>
<dd><p>Returns a string that represents the
approximation from bytes to KiB, MiB, etc.
(From <a href="https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications">https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications</a>)</p>
</dd>
<dt><a href="#isFileExtensionInMimeType">isFileExtensionInMimeType(fileMime, allowedExt)</a></dt>
<dd><p>Given a file mime type (fileMime) and an array of
file extensions (allowedExt), returns true if any of
the file extensions maps to the mime type.</p>
</dd>
</dl>

<a name="bytesToMultiples"></a>

## bytesToMultiples(bytes, showBytes)
Returns a string that represents the
approximation from bytes to KiB, MiB, etc.
(From https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)

**Kind**: global function

| Param | Description |
| --- | --- |
| bytes |  |
| showBytes | If true, appends in parenthesis the number of bytes |

<a name="isFileExtensionInMimeType"></a>

## isFileExtensionInMimeType(fileMime, allowedExt)
Given a file mime type (fileMime) and an array of
file extensions (allowedExt), returns true if any of
the file extensions maps to the mime type.

**Kind**: global function

| Param | Description |
| --- | --- |
| fileMime | File.type property (mime type) |
| allowedExt | Array of allowed extensions |
