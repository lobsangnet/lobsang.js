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

const constants = require('./constants')

/**
 * @module @lobsangnet/lobsang-subscriber-matrix/subscribe
 */

/**
 * Function to invoke callback whenever a message was received.
 *
 * @private
 * @param {object} client - MatrixClient.
 * @param {Function} onMessage - The callback to invoke.
 */
function subscribe (client, onMessage) {
  client.on(
    constants.MATRIX_ROOM_TIMELINE_TYPE,
    (event, room) => {
      if (!isRoomMessage(event)) {
        return
      }

      if (isCorrectRoom(event)) {
        const message = event.event.content.body
        onMessage(message)
      }
    }
  )
}

function isRoomMessage (event) {
  return event.getType() === constants.MATRIX_ROOM_MESSAGE_TYPE
}

function isCorrectRoom (event) {
  return event.getRoomId() === constants.MATRIX_ROOM_ID
}

module.exports = subscribe
