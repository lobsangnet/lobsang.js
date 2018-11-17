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

/**
 * Matrix JS SDK
 * @typedef {Object} SDK
 */

/**
 * A Matrix Client.
 * @typedef {Object} MatrixClient
 */

global.Olm = require('olm')
const sdk = require('matrix-js-sdk')

const CONSTANTS = require('./constants')

/**
 * @module @lobsangnet/lobsang-subscriber-matrix/client
 */

/**
 * Instantiates a SDK client of Matrix.
 *
 * @private
 * @returns {Promise<MatrixClient>}
 *   Promise, which resolves to a MatrixClient.
 */
const createClient = () => {
  const client = sdk.createClient({
    baseUrl: CONSTANTS.MATRIX_HOMESERVER,
    accessToken: CONSTANTS.MATRIX_ACCESS_TOKEN,
    userId: CONSTANTS.MATRIX_USER_ID
  })
  return Promise.resolve(client)
}

module.exports = createClient
