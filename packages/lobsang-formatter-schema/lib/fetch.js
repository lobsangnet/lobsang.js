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

const nodeFetch = require('node-fetch')

/**
 * @module @lobsangnet/lobsang-formatter-matrix/fetch
 */

/**
 * Wrapper around node-fetch for network trips.
 *
 * @private
 * @param {string} url - The resource to fetch.
 * @returns {Promise<object|Error>}
 *   Promise which resolves to a parsed JSON object.
 *   Or an Error if something went wrong.
 */
function fetch (url) {
  return nodeFetch(url).then((response) => response.json())
}

module.exports.fetch = fetch
