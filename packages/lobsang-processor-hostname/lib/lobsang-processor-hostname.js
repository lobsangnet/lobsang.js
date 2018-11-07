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
 * @module @lobsangnet/lobsang-processor-hostname
 */

/**
 * Library to process the hostname from an URL.
 *
 * @public
 * @param {string} link - The URL to parse.
 * @returns {Promise<string|Error>}
 *   Promise which resolves to the hostname if it could be parsed.
 *   Or an Error if the validation failed.
 */
function lobsangProcessorHostname (link) {
  let parts
  try {
    parts = parseUrl(link)
  } catch (error) {
    return Promise.reject(error)
  }

  if (parts.hostname === null) {
    return Promise.reject(new Error('Not an URL'))
  }

  return Promise.resolve(parts.hostname)
}

/**
 * Helper method to parse a link using WHATWG URL
 *
 * @private
 * @param {string} link - The URL to parse.
 * @returns {any} - An urlObject containing different aspects of an URL.
 * @throws {TypeError} - If the parsing failed.
 * @todo Replace any after https://github.com/Kegsay/flow-jsdoc/issues/22
 */
function parseUrl (link) {
  return new URL(link)
}

module.exports = lobsangProcessorHostname
