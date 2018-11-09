# `@lobsangnet/lobsang-processor-hostname`

Parses the hostname from an URL.

## Badges

[![CircleCI for continous integration][circleci-badge]][circleci-report]
[![codecov for coverage report summary][codecov-badge]][codecov-report]
[![Maintainability][codeclimate-badge]][codeclimate-report]
[![Greenkeeper for keeping dependencies up-to-date][greenkeeper-badge]][greenkeeper-website]
[![JavaScript Style Guide][standard-badge]][standard-website]
[![Known Vulnerabilities are searched for by SNYK][snyk-badge]][snyk-report]

[![NPM package @lobsangnet/lobsang-processor-hostname][npm-package-badge]][npm-package-website]

See [lobsang.network][website] for details.

## Usage

```js
const lobsangProcessorHostname = require('@lobsangnet/lobsang-processor-hostname')

const url = 'https://example.com'
lobsangProcessorHostname(url)
  .then((hostname) => console.log(hostname))
```

## License

Apache License. See [LICENSE.txt][license].

[circleci-badge]: https://circleci.com/gh/lobsangnet/lobsang.js/tree/master.svg?style=shield
[circleci-report]: https://circleci.com/gh/lobsangnet/lobsang.js/tree/master
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/1ed4c62e97210c3c1c0c/maintainability
[codeclimate-report]: https://codeclimate.com/github/lobsangnet/lobsang.js/maintainability
[codecov-badge]: https://codecov.io/gh/lobsangnet/lobsang.js/branch/master/graph/badge.svg
[codecov-report]: https://codecov.io/gh/lobsangnet/lobsang.js/tree/master/packages/lobsang-processor-hostname/lib
[greenkeeper-badge]: https://badges.greenkeeper.io/lobsangnet/lobsang.js.svg
[greenkeeper-website]: https://greenkeeper.io/
[license]: https://github.com/lobsangnet/lobsang.js/blob/master/LICENSE.txt
[matrix-js-sdk]: https://www.npmjs.com/package/matrix-js-sdk
[npm-package-badge]: https://nodei.co/npm/@lobsangnet/lobsang-processor-hostname.png
[npm-package-website]: https://npmjs.org/package/@lobsangnet/lobsang-processor-hostname
[snyk-badge]: https://snyk.io/test/github/lobsangnet/lobsang.js/badge.svg
[snyk-report]: https://snyk.io/test/github/lobsangnet/lobsang.js
[standard-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-website]: https://standardjs.com/
[website]: http://lobsang.network/
