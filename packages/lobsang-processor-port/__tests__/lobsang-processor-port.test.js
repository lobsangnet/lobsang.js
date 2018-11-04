'use strict'
import test from 'ava'

import lobsangProcessorPort from '..'

test('rejects if bogus input is sent', async (t) => {
  const url = null
  const error = await t.throwsAsync(async () => {
    await lobsangProcessorPort(url)
  })
  t.is(error.message, 'The "url" argument must be of type string. Received type object')
})

test('rejects if not an url', async (t) => {
  const url = 'not.an.url'
  const error = await t.throwsAsync(async () => {
    await lobsangProcessorPort(url)
  })
  t.is(error.message, 'Not an URL')
})

test('rejects if no port associated', async (t) => {
  const url = 'mailto:john@doe.foo'
  const error = await t.throwsAsync(async () => {
    await lobsangProcessorPort(url)
  })
  t.is(error.message, 'Has no port')
})

test('extracts the port form an url', async (t) => {
  const url = 'http://my.example.com:80'
  const port = await lobsangProcessorPort(url)
  t.is(port, '80')
})
