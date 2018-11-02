'use strict'
const CONSTANTS = require('./constants')

const send = async (client, formattedMessage) => {
  await client.sendEvent(
    CONSTANTS.MATRIX_ROOM_ID,
    CONSTANTS.MATRIX_ROOM_MESSAGE_TYPE,
    formattedMessage,
    ''
  )
  return Promise.resolve(true)
}

module.exports = send
