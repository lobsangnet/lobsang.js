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
 * @module @lobsangnet/lobsang-connect-matrix/check
 */

/**
 * Checks the message on type etc.
 *
 * @private
 * @param {String} message - The message to send.
 * @returns {Promise<String|Error>}
 *   Promise which resolved to a cleaned message.
 *   Or an Error if rejected.
 */
function check (message) {
  if (!message) {
    return Promise.reject(new Error('Argument must not be falsy!'))
  }

  if (typeof message !== 'string') {
    return Promise.reject(new Error('Argument must be a string!'))
  }

  return Promise.resolve(message)
}

module.exports = check
