# `@lobsangnet/lobsang-connect-matrix`

Wraps `matrix-js-sdk` for easier write access.

## Usage

First, copy `.env.example` to `.env` (in `.gitignore`) and fill it with your
secrets.

```js
const lobsangConnectMatrix = require('@lobsangnet/lobsang-connect-matrix');

const message = 'My message'
lobsangConnectMatrix(message)
  .then('Sent!')
```

## License

Apache 2.0
