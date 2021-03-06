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

const wrapper = require('./sync')

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
    client.once('sync', (state) => {
      if (wrapper.isSyncState(state)) {
        return resolve(client)
      } else {
        return reject(new Error('Client could not sync'))
      }
    })
  })
}

module.exports = connect
