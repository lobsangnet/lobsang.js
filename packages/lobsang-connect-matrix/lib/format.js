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
 * @typedef MatrixMessage
 * @type Object
 * @property {String} body - The content to transmit.
 * @property {String} msgtype - What kind of message to send.
 */

const CONSTANTS = require('./constants')

/**
 * @module @lobsangnet/lobsang-connect-matrix/format
 */

/**
 * Wraps a message into the format Matrix expects.
 *
 * @private
 * @arg {String} message - The message to send.
 * @returns {Promise<MatrixMessage>}
 *   Promise which resolves to a MatrixMessage.
 */
const format = (message) => {
  const formattedMessage = {
    body: message,
    msgtype: CONSTANTS.MATRIX_NOTICE_TYPE
  }
  return Promise.resolve(formattedMessage)
}

module.exports = format
