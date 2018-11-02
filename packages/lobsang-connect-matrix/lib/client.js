'use strict'
global.Olm = require('olm')
const sdk = require('matrix-js-sdk')

const CONSTANTS = require('./constants')

const createClient = () => {
  const client = sdk.createClient({
    baseUrl: CONSTANTS.MATRIX_HOMESERVER,
    accessToken: CONSTANTS.MATRIX_ACCESS_TOKEN,
    userId: CONSTANTS.MATRIX_USER_ID
  })
  return Promise.resolve(client)
}

module.exports = createClient
