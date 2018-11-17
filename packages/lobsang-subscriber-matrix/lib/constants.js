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

require('dotenv').config()

/**
 * @module @lobsangnet/lobsang-subscriber-matrix/constants
 */

/**
 * Holds constants used all over this lib.
 *
 * @private
 * @type Object
 * @property {String} MATRIX_HOMESERVER - The matrix home server to connect to.
 * @property {String} MATRIX_ACCESS_TOKEN - Your matrix access token.
 * @property {String} MATRIX_USER_ID - Your user ID.
 * @property {String} MATRIX_ROOM_ID - The room ID to push messages into.
 * @property {String} MATRIX_ROOM_TIMELINE_TYPE - Defined type for timeline events.
 */
const CONSTANTS = Object.create(null)
CONSTANTS.MATRIX_HOMESERVER = process.env.MATRIX_HOMESERVER
CONSTANTS.MATRIX_ACCESS_TOKEN = process.env.MATRIX_ACCESS_TOKEN
CONSTANTS.MATRIX_USER_ID = process.env.MATRIX_USER_ID
CONSTANTS.MATRIX_ROOM_ID = process.env.MATRIX_ROOM_ID
CONSTANTS.MATRIX_ROOM_TIMELINE_TYPE = 'Room.timeline'

module.exports = CONSTANTS
