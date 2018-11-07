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

const portNumbers = require('port-numbers')
const url = require('url')

/**
 * @module @lobsangnet/lobsang-processor-port
 */

/**
 * Library to process the port from an URL.
 *
 * @public
 * @arg {String} link - The URL to parse.
 * @returns {Promise<String|Error>}
 *   Promise which resolves to the port if it could be parsed.
 *   Or an Error if the validation failed.
 */
function lobsangProcessorPort (link) {
  let parts
  try {
    parts = url.parse(link)
  } catch (error) {
    return Promise.reject(error)
  }

  if (parts.protocol === null) {
    return Promise.reject(new Error('Not an URL'))
  }

  if (parts.port === null) {
    return getDefaultPortByProtocol(parts.protocol)
  }

  // For some reasons, the Promise resolves always to a String (not Number).
  return Promise.resolve(parts.port)
}

/**
 * Helper method to look up port by protocol.
 *
 * @private
 * @arg {String} rawProtocol - Protocol as returned by url, i.e. with :
 * @returns {Number}
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
    ? Promise.resolve(portByProtocol.port)
    : Promise.reject(new Error('Has no port'))
}

module.exports = lobsangProcessorPort