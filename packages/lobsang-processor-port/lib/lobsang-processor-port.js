'use strict'
const portNumbers = require('port-numbers')
const url = require('url')

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

  return Promise.resolve(parts.port)
}

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
