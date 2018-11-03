'use strict'
const url = require('url')

function lobsangProcessorHostname (link) {
  let parts
  try {
    parts = url.parse(link)
  } catch (error) {
    return Promise.reject(error)
  }

  if (parts.hostname === null) {
    return Promise.reject(new Error('Not an URL'))
  }

  return Promise.resolve(parts.hostname)
}

module.exports = lobsangProcessorHostname
