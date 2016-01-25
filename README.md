This npm package exports a single argument comparison function. The
function takes two [reviewers edition][reved] strings as inputs and
returns:

[reved]: https://npmjs.com/packages/reviewers-edition-parse

- `-1` if the first argument is an earlier reviewers edition than the
  second argument

- `0` if the first argument is equal to the second argument

- `1` if the first argument is a later reviewers edition than the
  second argument

This makes the function a suitable argument to `Array.prototype.sort`.

The following demonstration is also the test suite for the parser, using
Node.js' built-in `assert` module.

Here is a list of reviewers edition strings in ascending order.

```javascript
var sorted = [
  '1e1d', '1e2d', '1e', '1e2u1d', '1e2u', '1e2u1c1d', '1e2u1c2d',
  '3e', '3e1c', '3e2c', '3e3c', '3e2u', '3e11u',
  '4e1d', '4e2d', '4e', '4e99c1d', '4e100c',
  '5e1c', '5e2c', '5e1u', '5e2u', '5e3u1d',
  '1000e' ]
```

This test ensures that if we shuffle that list and resort it using the
comparison function, it ends up in sorted order again.

```javascript
require('assert').deepStrictEqual(
  require('array-shuffle')(sorted)
    .sort(require('reviewers-edition-compare')),
  sorted)
```
