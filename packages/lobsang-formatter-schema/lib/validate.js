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

const Ajv = require('ajv')

/**
 * @module @lobsangnet/lobsang-formatter-matrix/validate
 */

/**
 * Derives a validator from a schema.
 *
 * @private
 * @param {object} schema - The schema object to validate data against.
 * @returns {Promise<Function|Error>}
 *   Promise which resolves to a validateFunction to use.
 *   Or an Error if a validator function could not be derived.
 */
function validate (schema) {
  const ajv = new Ajv()
  try {
    const validator = ajv.compile(schema)
    return Promise.resolve(validator)
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = validate
