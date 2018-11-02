'use strict'
const url = require('url')

function lobsangProcessorHostname (link) {
  const parts = url.parse(link)
  return Promise.resolve(parts.hostname)
}

module.exports = lobsangProcessorHostname
