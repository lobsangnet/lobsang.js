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

const createClient = require('./client')
const connect = require('./connect')
const subscribe = require('./subscribe')

/**
 * @module @lobsangnet/lobsang-subscriber-matrix
 */

/**
 * Library to read messages from matrix.
 *
 * @public
 * @param {Function} onMessage - The callback to invoke if a new message came.
 * @param {object} client - Optional. A client from a former session.
 */
const lobsangSubscriberMatrix = async (onMessage, client = null) => {
  const matrixClient = initialiseClient(client)
  subscribe(matrixClient, onMessage)
}

/**
 * Helper function to initialise a client.
 *
 * @private
 * @param {object} maybeClient - Either null or an already exisiting client.
 * @return {object} matrixClient
 */
function initialiseClient (client) {
  if (isMatrixClient(client)) {
    return connect(client)
  }

  const matrixClient = createClient()
  return connect(matrixClient)
}

/**
 * Helper function to ensure that a candidate is actually a valid client.
 *
 * @private
 * @param {object} candidate - Maybe a Matrix client.
 * @return {boolean} - Result of checks.
 */
function isMatrixClient (candidate) {
  if (candidate === null) {
    return false
  }

  if (typeof candidate.startClient === 'function') {
    return true
  }

  return false
}

module.exports = lobsangSubscriberMatrix
