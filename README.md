## Functions

<dl>
<dt><a href="#bytesToMultiples">bytesToMultiples(bytes, showBytes)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a string that represents the
approximation from bytes to KiB, MiB, etc.
(From <a href="https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications">https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications</a>)</p>
</dd>
<dt><a href="#isFileExtensionInMimeType">isFileExtensionInMimeType(fileMime, allowedExt)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given a file mime type (fileMime) and an array of
file extensions (allowedExt), returns true if any of
the file extensions maps to the mime type.</p>
</dd>
<dt><a href="#strFormat">strFormat(str, replacements)</a> ⇒ <code>string</code></dt>
<dd><p>Given a string with tokens in it and an array of replacements, returns
the string with the tokens replaced by the replacements.</p>
<p>Usage:
<code>strFormat(&quot;This is a %s %s&quot;, [&quot;formatted&quot;, &quot;string&quot;]</code>
returns <code>This is a formatted string</code></p>
</dd>
<dt><a href="#strTrunc">strTrunc(str, [characters])</a> ⇒ <code>string</code></dt>
<dd><p>Truncates a string to the specified number of characters
ellipsifying it (adding three dots at the end)</p>
</dd>
</dl>

<a name="bytesToMultiples"></a>

## bytesToMultiples(bytes, showBytes) ⇒ <code>String</code>
Returns a string that represents the
approximation from bytes to KiB, MiB, etc.
(From https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>number</code> | The amount of bytes to be processed |
| showBytes | <code>boolean</code> | If true, appends in parenthesis the number of bytes |

<a name="isFileExtensionInMimeType"></a>

## isFileExtensionInMimeType(fileMime, allowedExt) ⇒ <code>boolean</code>
Given a file mime type (fileMime) and an array of
file extensions (allowedExt), returns true if any of
the file extensions maps to the mime type.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fileMime | <code>string</code> | File.type property (mime type) |
| allowedExt | <code>Array.&lt;string&gt;</code> | Array of allowed extensions |

<a name="strFormat"></a>

## strFormat(str, replacements) ⇒ <code>string</code>
Given a string with tokens in it and an array of replacements, returns
the string with the tokens replaced by the replacements.

Usage:
`strFormat("This is a %s %s", ["formatted", "string"]`
returns `This is a formatted string`

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string with or without placeholders |
| replacements | <code>Array.&lt;string&gt;</code> | An array of replacements for the placeholders |

<a name="strTrunc"></a>

## strTrunc(str, [characters]) ⇒ <code>string</code>
Truncates a string to the specified number of characters
ellipsifying it (adding three dots at the end)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>string</code> |  | The string to truncate |
| [characters] | <code>number</code> | <code>10</code> | The amount of characters to truncate (excluding the dots) |

