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

const constants = require('./constants')

/**
 * @module @lobsangnet/lobsang-formatter-matrix/schema
 */

/**
 * Library to format a message into a schemaMessage
 *
 * @private
 * @param {string} message - The message to format.
 * @param {string} topic - The topic to send this message to.
 * @returns {object}
 *   SchemaMessage object
 * @todo Replace object after https://github.com/Kegsay/flow-jsdoc/issues/22
 */
function format (message, topic) {
  const now = new Date()
  const license = constants.LOBSANG_DEFAULT_LICENSE
  const id = 'toBeAdapted'
  const issuer = 'toBeAdapted'

  return {
    content: message,
    topic,
    license,
    contentType: null,
    created: now.toISOString(),
    derivedFrom: null,
    id,
    issuer
  }
}

module.exports = format
