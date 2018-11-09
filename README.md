# Lobsang.js

This repository contains packages to use for Lobsang.

The Lobsang Network brings search to the decentralised web.

## Badges

[![CircleCI for continous integration][circleci-badge]][circleci-report]
[![codecov for coverage report summary][codecov-badge]][codecov-report]
[![Maintainability][codeclimate-badge]][codeclimate-report]
[![Greenkeeper for keeping dependencies up-to-date][greenkeeper-badge]][greenkeeper-website]
[![JavaScript Style Guide][standard-badge]][standard-website]
[![lerna to manage a monorepo][lerna-badge]][lerna-website]
[![Known Vulnerabilities are searched for by SNYK][snyk-badge]][snyk-report]

Explore [packages][packages] for details.

## Naming conventions

This monorepository follows some conventions regarding the naming of packages:

- lobsang-publisher- are dealing with publishing to a channel.
- lobsang-subscriber- are dealing with reading from a channel. They need a topic.
- lobsang-connect- are combining publisher and subscriber (to be discussed).
- lobsang-formatter- are dealing with wrapping strings (or pre-formatted input) into a target format.
- lobsang-processor- are extracting information from input.

### lobsang-publisher

If you want to write content somewhere, you need a publisher for it.
For now, there exists only one for Matrix.org, but more are planned
(e.g. Redis, IPFS, WebTorrents etc).

### lobsang-subscriber

If you want to listen to some messages, you need a subscriber for that medium.
Not only that, you will need to tell the subscriber, in which `topic`s you are
interested in, so that it can filter the relevant messages for you.

You can have more than one subscriber running.

### lobsang-connect

This is under discussion. Sometimes, you want to have both, read and write on
a medium. A lobsang-connect package will combine publisher and subscriber to
achieve that.

### lobsang-formatter

Often, the medium expects your message to be formatted in a certain way.
That's why you need a formatter for it. Normally, the publisher will depend on
it under the hood and takes care of the formatting for you.

### lobsang processor

If you have received a message in a `topic` you are interested in, you most
likely want to process that message somehow. It would be kind if you could use
a publisher to feed back the processed information into the network.

## License

Apache License. See [LICENSE.txt][license].

[circleci-badge]: https://circleci.com/gh/lobsangnet/lobsang.js/tree/master.svg?style=shield
[circleci-report]: https://circleci.com/gh/lobsangnet/lobsang.js/tree/master
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/1ed4c62e97210c3c1c0c/maintainability
[codeclimate-report]: https://codeclimate.com/github/lobsangnet/lobsang.js/maintainability
[codecov-badge]: https://codecov.io/gh/lobsangnet/lobsang.js/branch/master/graph/badge.svg
[codecov-report]: https://codecov.io/gh/lobsangnet/lobsang.js
[greenkeeper-badge]: https://badges.greenkeeper.io/lobsangnet/lobsang.js.svg
[greenkeeper-website]: https://greenkeeper.io/
[lerna-badge]: https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg
[lerna-website]: https://lernajs.io/
[license]: https://github.com/lobsangnet/lobsang.js/blob/master/LICENSE.txt
[npm-package-badge]: https://nodei.co/npm/@lobsangnet/lobsang-connect-matrix.png
[npm-package-website]: https://npmjs.org/package/@lobsangnet/lobsang-connect-matrix
[packages]: https://github.com/lobsangnet/lobsang.js/tree/master/packages/
[snyk-badge]: https://snyk.io/test/github/lobsangnet/lobsang.js/badge.svg
[snyk-report]: https://snyk.io/test/github/lobsangnet/lobsang.js
[standard-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-website]: https://standardjs.com/
