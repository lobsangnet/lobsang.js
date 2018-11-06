# `@lobsangnet/lobsang-connect-matrix`

Wraps [matrix-js-sdk][matrix-js-sdk] for easier write access.

## Badges

[![CircleCI for continous integration][circleci-badge]][circleci-report]
[![codecov for coverage report summary][codecov-badge]][codecov-report]
[![Greenkeeper for keeping dependencies up-to-date][greenkeeper-badge]][greenkeeper-website]
[![JavaScript Style Guide][standard-badge]][standard-website]
[![Known Vulnerabilities are searched for by SNYK][snyk-badge]][snyk-report]

[![NPM package @lobsangnet/lobsang-connect-matrix][npm-package-badge]][npm-package-website]

See [lobsang.network][website] for details.

## Usage

First, copy `.env.example` to `.env` (in `.gitignore`) and fill it with your
secrets.

```js
const lobsangConnectMatrix = require('@lobsangnet/lobsang-connect-matrix')

const message = 'My message'
lobsangConnectMatrix(message)
  .then(() => console.log('Sent!'))
```

## License

Apache License. See [LICENSE.txt][license].

[circleci-badge]: https://circleci.com/gh/lobsangnet/lobsang.js/tree/master.svg?style=shield
[circleci-report]: https://circleci.com/gh/lobsangnet/lobsang.js/tree/master
[codecov-badge]: https://codecov.io/gh/lobsangnet/lobsang.js/branch/master/graph/badge.svg
[codecov-report]: https://codecov.io/gh/lobsangnet/lobsang.js/tree/master/packages/lobsang-connect-matrix/lib
[greenkeeper-badge]: https://badges.greenkeeper.io/lobsangnet/lobsang.js.svg
[greenkeeper-website]: https://greenkeeper.io/
[license]: https://github.com/lobsangnet/lobsang.js/blob/master/LICENSE.txt
[matrix-js-sdk]: https://www.npmjs.com/package/matrix-js-sdk
[npm-package-badge]: https://nodei.co/npm/@lobsangnet/lobsang-connect-matrix.png
[npm-package-website]: https://npmjs.org/package/@lobsangnet/lobsang-connect-matrix
[snyk-badge]: https://snyk.io/test/github/lobsangnet/lobsang.js/badge.svg
[snyk-report]: https://snyk.io/test/github/lobsangnet/lobsang.js
[standard-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-website]: https://standardjs.com/
[website]: http://lobsang.network/
