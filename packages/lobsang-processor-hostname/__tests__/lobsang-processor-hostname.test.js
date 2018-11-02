'use strict'
import test from 'ava'

import lobsangProcessorHostname from '..'

test('extracts the hostname from an url', async (t) => {
  const url = 'https://my.example.com/'
  const hostname = await lobsangProcessorHostname(url)
  t.is(hostname, 'my.example.com')
})
