'use strict'
import test from 'ava'

import lobsangProcessorPort from '..'

test('rejects if bogus input is sent', async (t) => {
  const url = null
  const error = await t.throwsAsync(async () => {
    await lobsangProcessorPort(url)
  })
  t.is(error.message, `Invalid URL: ${url}`)
})

test('rejects if no port associated', async (t) => {
  const url = 'mailto:john@doe.foo'
  const error = await t.throwsAsync(async () => {
    await lobsangProcessorPort(url)
  })
  t.is(error.message, 'Has no port')
})

test('extracts the port form an url', async (t) => {
  const url = 'http://my.example.com:8080'
  const port = await lobsangProcessorPort(url)
  t.is(port, '8080')
})

test('derives the port from the protocol', async (t) => {
  const url = 'http://my.example.com'
  const port = await lobsangProcessorPort(url)
  t.is(port, '80')
})
