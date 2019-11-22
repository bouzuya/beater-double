# beater-double

A test double library for [beater][bouzuya/beater].

[bouzuya/beater]: https://github.com/bouzuya/beater

## Installation

```
$ npm install --save-dev beater-double
```

## Usage

```javascript
import assert from 'assert';
import { spyFn } from 'beater-double';

const f = spyFn((...ns: number[]) => JSON.stringify(ns));
assert.deepStrictEqual(f(123), '[123]');
assert.deepStrictEqual(f(456, 789), '[456,789]');
assert.deepStrictEqual(f.calls, [[123], [456, 789]]);
```

## Badges

[![npm version][npm-badge-url]][npm-url]
[![Travis CI][travis-ci-badge-url]][travis-ci-url]

[npm-badge-url]: https://img.shields.io/npm/v/beater-double
[npm-url]: https://www.npmjs.com/package/beater-double
[travis-ci-badge-url]: https://img.shields.io/travis/bouzuya/beater-double
[travis-ci-url]: https://travis-ci.org/bouzuya/beater-double

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([https://bouzuya.net/][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: https://bouzuya.net/
