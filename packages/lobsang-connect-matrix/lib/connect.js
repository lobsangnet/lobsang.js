'use strict'
/*
Copyright 2018 André Jaenisch

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const CONSTANTS = require('./constants')

/**
 * @module @lobsangnet/lobsang-connect-matrix/connect
 */

/**
 * Connects to a MatrixClient and resolves once connection was established.
 *
 * @private
 * @param {MatrixClient} client - The client used for connection.
 * @returns {Promise<MatrixClient|Error>}
 *   Promise which resolves to a connected MatrixClient.
 *   Or an Error if connection could not be established.
 */
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

/**
 * Helper method to check the state against those indicating some sync state.
 *
 * @private
 * @param {String} state - The current state of MatrixClient
 * @returns {Boolean}
 *   Indicating whether the client is already synced (or syncing)
 *   Or in another state.
 */
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
