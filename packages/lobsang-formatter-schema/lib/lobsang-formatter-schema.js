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
 * @typedef SchemaMessage
 * @type Object
 */

const Ajv = require('ajv')
const fetch = require('node-fetch')

const LOBSANG_CONTENT_SCHEMA_URL = 'https://raw.githubusercontent.com/lobsangnet/lobsang.schema/master/lobsang.content.schema.json'

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
  return getSchemaForTopic(topic)
    .then((schema) => {
      const validate = getValidatorForSchema(schema)

      if (validate(message)) {
        return Promise.resolve(message)
      }
      return Promise.reject(validate.errors)
    })
}

/**
 * Helper method to get the schema for a topic.
 *
 * @private
 * @param {string} topic - The topic for which a schema should be fetched.
 * @returns {Promise<object|Error>}
 *   Promise which resolves in a schema object.
 *   Or an Error if the topic is not supported or fetch failed.
 */
function getSchemaForTopic (topic) {
  if (topic === 'CONTENT') {
    return fetch(LOBSANG_CONTENT_SCHEMA_URL)
      .then((response) => response.json())
  }
  return Promise.reject(new Error('Topic is not supported'))
}

/**
 * Helper method to get the validator using ajv.
 *
 * @private
 * @param {object} schema - The schema to validate against.
 * @returns {Function|Error}
 *   Either a validateFunction to use.
 *   Or an Error if the topic is not supported.
 */
function getValidatorForSchema (schema) {
  const ajv = new Ajv()
  return ajv.compile(schema)
}

module.exports = lobsangFormatterSchema
