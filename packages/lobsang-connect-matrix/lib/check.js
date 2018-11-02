'use strict'

function check (message) {
  if (!message) {
    return Promise.reject(new Error('Argument must not be falsy!'))
  }
  return Promise.resolve(message)
}

module.exports = check
