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
 * @module @lobsangnet/lobsang-formatter-matrix
 */

/**
 * Library to wrap a message into an object which can be sent to matrix.
 *
 * @public
 * @param {string} message - The message to format.
 * @returns {Promise<any|Error>}
 *   Promise which resolves to a MatrixMessage.
 *   Or an Error if something went wrong.
 * @todo Replace any after https://github.com/Kegsay/flow-jsdoc/issues/22
 */
function lobsangFormatterMatrix (message) {
  if (typeof message !== 'string') {
    return Promise.reject(new Error('Message is not a string'))
  }

  const formattedMessage = {
    body: message,
    msgtype: CONSTANTS.MATRIX_NOTICE_TYPE
  }
  return Promise.resolve(formattedMessage)
}

module.exports = lobsangFormatterMatrix
