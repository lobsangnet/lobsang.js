'use strict'
const CONSTANTS = require('./constants')

function connect (client) {
  client.startClient()

  return new Promise((resolve, reject) => {
    client.once('sync', (state, prevState, res) => {
      if (isSyncState(state)) {
        return resolve(client)
      } else {
        return reject(new Error('Client could not sync'))
      }
    })
  })
}

function isSyncState (state) {
  if (state === CONSTANTS.MATRIX_STATE_PREPARED) {
    return true
  }

  if (state === CONSTANTS.MATRIX_STATE_SYNCING) {
    return true
  }

  return false
}

module.exports = connect
