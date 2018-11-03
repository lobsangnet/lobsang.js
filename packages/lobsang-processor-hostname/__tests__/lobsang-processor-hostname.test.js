'use strict'
import test from 'ava'

import lobsangProcessorHostname from '..'

test('rejects if bogus input is sent', async (t) => {
  const url = null
  const error = await t.throwsAsync(async () => {
    await lobsangProcessorHostname(url)
  })
  t.is(error.message, 'The "url" argument must be of type string. Received type object')
})

test('rejects if not an url', async (t) => {
  const url = 'not.an.url'
  const error = await t.throwsAsync(async () => {
    await lobsangProcessorHostname(url)
  })
  t.is(error.message, 'Not an URL')
})

test('extracts the hostname from an url', async (t) => {
  const url = 'https://my.example.com/'
  const hostname = await lobsangProcessorHostname(url)
  t.is(hostname, 'my.example.com')
})
