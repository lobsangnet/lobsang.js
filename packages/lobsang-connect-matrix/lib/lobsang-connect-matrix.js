'use strict'

const check = require('./check')
const createClient = require('./client')
const connect = require('./connect')
const format = require('./format')
const send = require('./send')

const lobsangConnectMatrix = async (rawMessage) => {
  const message = await check(rawMessage)
  const formattedMessage = format(message)

  const client = createClient()
  await initialiseClient(client)
  await send(client, formattedMessage)
  return Promise.resolve(true)
}

function initialiseClient () {
  return connect()
}

module.exports = lobsangConnectMatrix
