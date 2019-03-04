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
 * @module @lobsangnet/lobsang-subscriber-matrix
 */

/**
 * Library to read messages from matrix.
 *
 * @public
 * @param {Function} onMessage - The callback to invoke if a new message came.
 */
function lobsangSubscriberMatrix (onMessage) {
  onMessage('Test')
}

module.exports = lobsangSubscriberMatrix
