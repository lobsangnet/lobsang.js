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
 * @typedef urlObject
 * @type object
 * @property {string} protocol
 * @property {number} port
 */

const portNumbers = require('port-numbers')

/**
 * @module @lobsangnet/lobsang-processor-port
 */

/**
 * Library to process the port from an URL.
 *
 * @public
 * @param {string} link - The URL to parse.
 * @returns {Promise<string|Error>}
 *   Promise which resolves to the port if it could be parsed.
 *   Or an Error if the validation failed.
 */
function lobsangProcessorPort (link) {
  let parts
  try {
    parts = parseUrl(link)
  } catch (error) {
    return Promise.reject(error)
  }

  if (parts.port === '') {
    return getDefaultPortByProtocol(parts.protocol)
  }

  // For some reasons, the Promise resolves always to a String (not Number).
  return Promise.resolve(String(parts.port))
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

/**
 * Helper method to look up port by protocol.
 *
 * @private
 * @param {string} rawProtocol - Protocol as returned by url, i.e. with :
 * @returns {Promise<string|Error>}
 *   Associated port with protocol.
 *   Or an Error if the validation failed (e.g. mailto:).
 */
function getDefaultPortByProtocol (rawProtocol) {
  // port-numbers expect no trailing colon
  const protocol = rawProtocol.endsWith(':')
    ? rawProtocol.slice(0, -1)
    : rawProtocol

  // e.g. mailto has no port associated
  // example return value:
  // { port: 80, protocol: 'tcp', description: 'World Wide Web HTTP' }
  const portByProtocol = portNumbers.getPort(protocol)

  return portByProtocol
    ? Promise.resolve(String(portByProtocol.port))
    : Promise.reject(new Error('Has no port'))
}

module.exports = lobsangProcessorPort
