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

const constants = require('./constants')
const wrapper = require('./fetch')

/**
 * @module @lobsangnet/lobsang-formatter-matrix/schema
 */

/**
 * Library to get a schema for the given topic.
 *
 * @private
 * @param {string} topic - The topic for which a schema should be fetched.
 * @returns {Promise<object|Error>}
 *   Promise which resolves in a schema object.
 *   Or an Error if the topic is not supported or fetch failed.
 * @todo Replace object after https://github.com/Kegsay/flow-jsdoc/issues/22
 */
function schema (topic) {
  if (topic === constants.LOBSANG_CONTENT_TOPIC) {
    return wrapper.fetch(constants.LOBSANG_CONTENT_SCHEMA_URL)
  }
  return Promise.reject(new Error('Topic is not supported'))
}

module.exports = schema
