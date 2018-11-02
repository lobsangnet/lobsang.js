'use strict'
const CONSTANTS = require('./constants')

const format = (message) => {
  const formattedMessage = {
    body: message,
    msgtype: CONSTANTS.MATRIX_NOTICE_TYPE
  }
  return Promise.resolve(formattedMessage)
}

module.exports = format
