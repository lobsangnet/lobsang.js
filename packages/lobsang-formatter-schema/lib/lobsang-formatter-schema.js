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

const format = require('./format')
const schema = require('./schema')
const validate = require('./validate')

/**
 * @module @lobsangnet/lobsang-formatter-matrix
 */

/**
 * Library to wrap a message into an object which complies to the given schema.
 *
 * @public
 * @param {string} message - The message to format.
 * @param {string} topic - The topic in which the message should be published.
 * @returns {Promise<any|Error>}
 *   Promise which resolves to a SchemaMessage.
 *   Or an Error if something went wrong.
 * @todo Replace any after https://github.com/Kegsay/flow-jsdoc/issues/22
 */
function lobsangFormatterSchema (message, topic) {
  if (typeof message !== 'string') {
    return Promise.reject(new Error('Message is not a string'))
  }

  return schema(topic)
    .then((schemaObject) => {
      const validator = validate(schemaObject)
      const schemaMessage = format(message)

      if (validator(schemaMessage)) {
        return Promise.resolve(schemaMessage)
      }
      return Promise.reject(validator.errors)
    })
}

module.exports = lobsangFormatterSchema
