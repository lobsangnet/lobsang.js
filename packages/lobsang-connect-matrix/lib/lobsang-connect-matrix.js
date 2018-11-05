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

const check = require('./check')
const createClient = require('./client')
const connect = require('./connect')
const format = require('./format')
const send = require('./send')

/**
 * @module @lobsangnet/lobsang-connect-matrix
 */

/**
 * Library to send messages to matrix.
 *
 * @public
 * @arg {String} rawMessage - The message to send.
 * @returns {Promise<Boolean|Error>}
 *   Promise which resolves to „true” if the message was sent.
 *   Or an Error if something went wrong along the way.
 */
const lobsangConnectMatrix = async (rawMessage) => {
  const message = await check(rawMessage)
  const formattedMessage = format(message)

  const client = createClient()
  await initialiseClient(client)
  await send(client, formattedMessage)
  return Promise.resolve(true)
}

/**
 * Wrapper around connect call for readability purposes.
 *
 * @private
 * @returns {MatrixClient} - The initialised client
 */
function initialiseClient () {
  return connect()
}

module.exports = lobsangConnectMatrix
